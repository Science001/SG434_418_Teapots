import { getRepository, In } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import { Result } from "../entity/result.entity";
import { Subject } from "../entity/subject.entity";
import { Exam } from "../entity/exam.entity";
import { Academic } from "../entity/academic.entity";

const result = express.Router();
result.use(bodyParser.json());

result.get("/", async (req, res) => {
  const resultRepo = getRepository(Result);
  const academicRepo = getRepository(Academic);
  if (req.user.role !== "directorate") {
    const academics = await academicRepo.find({
      where: { school: { id: req.user.schoolId } },
      select: ["id"],
    });
    const results = await resultRepo.find({
      where: { academic: In(academics.map((academic) => academic.id)) },
    });
    res.send({ results });
  } else {
    const results = await resultRepo.find();
    res.send({ results });
  }
});

// Teacher only endpoints
result.use((req, res, next) => {
  if (req.user.role !== "teacher") {
    res.sendStatus(401);
  } else next();
});

result.post("/", async (req, res) => {
  const resultRepo = getRepository(Result);
  const examRepo = getRepository(Exam);
  const subjectRepo = getRepository(Subject);
  const academicRepo = getRepository(Academic);
  //   const requestBody = {
  //     exam: "uuid",
  //     subjects: ["uuid", "uuid"],
  //     results: [
  //       {
  //         academic: "uuid",
  //         marks: [50, 78],
  //       },
  //     ],
  //   };
  const { exam: examId, subjects: subjectIds, results } = req.body;
  const exam = await examRepo.findOne({ where: { id: examId } });
  if (!exam) {
    res.status(400).send({ message: "Exam not found" });
    return;
  }

  const subjects = await Promise.all(
    subjectIds.map((subjectId: string) =>
      subjectRepo.findOne({ where: { id: subjectId } })
    )
  );

  results.map(async (resultItem: { academic: string; marks: number[] }) => {
    const academic = await academicRepo.findOne({
      where: { id: resultItem.academic },
    });
    if (academic) {
      const newResults = resultItem.marks.map((mark, i) =>
        resultRepo.create({ academic, exam, mark, subject: subjects[i] })
      );
      await resultRepo.save(newResults);
    }
  });
  res.send({ message: "Results updated successfully" });
});

export default result;

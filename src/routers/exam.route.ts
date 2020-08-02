import { getRepository } from "typeorm";
import express from "express";
import bodyParser from "body-parser";

import { Exam } from "../entity/exam.entity";
import { getAcademicYear } from "../helpers/getAcademicYear";

const exam = express.Router();
exam.use(bodyParser.json());

exam.get("/", async (_req, res) => {
  const examRepo = getRepository(Exam);
  const exams = await examRepo.find();
  res.send({ exams });
});

exam.use((req, res, next) => {
  if (req.user.role !== "directorate") {
    res.sendStatus(401);
  } else next();
});

exam.post("/", async (req, res) => {
  const examRepo = getRepository(Exam);
  const { name } = req.body;
  const academicYear = req.body.academicYear || getAcademicYear();
  const examEntity = examRepo.create({ name, academicYear });
  await examRepo.save(examEntity);
  res.status(201).send({ message: "Created Exam successfully" });
});

export default exam;

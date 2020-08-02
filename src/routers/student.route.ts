import { getRepository } from "typeorm";
import express from "express";
import bodyParser from "body-parser";

import { Student } from "../entity/student.entity";
import { Academic } from "../entity/academic.entity";
import { School } from "../entity/school.entity";
import { Grade } from "../entity/grade.entity";

import { getAcademicYear } from "../helpers/getAcademicYear";

const student = express.Router();
student.use(bodyParser.json());

student.get("/", async (req, res) => {
  const academicRepo = getRepository(Academic);
  const schoolRepo = getRepository(School);
  const studentRepo = getRepository(Student);
  if (req.user.role !== "directorate") {
    const academics = await academicRepo.find({
      where: { school: { id: req.user.schoolId } },
    });
    res.send({ academics });
  } else {
    const academics = await academicRepo.find();
    res.send({ academics });
  }
});

// Non-directorate endpoints
student.use((req, res, next) => {
  if (req.user.role === "directorate") {
    res.sendStatus(401);
  } else next();
});

student.post("/", async (req, res) => {
  const studentRepo = getRepository(Student);
  const schoolRepo = getRepository(School);
  const academicRepo = getRepository(Academic);
  const gradeRepo = getRepository(Grade);

  const { name, gender, grade: gradeValue } = req.body;

  const grade = await gradeRepo.findOne({
    value: req.user.role === "teacher" ? req.user.grade : gradeValue,
  });
  const school = await schoolRepo.findOne({ where: { id: req.user.schoolId } });

  const studentEntity = studentRepo.create({
    name,
    gender,
  });

  const academic = academicRepo.create({
    school,
    grade,
    student: studentEntity,
    year: getAcademicYear(),
  });
  await academicRepo.save(academic);
  res.status(201).send({ message: "Created Student successfully" });
});

export default student;

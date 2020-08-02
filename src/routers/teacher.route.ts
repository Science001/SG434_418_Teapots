import { getRepository } from "typeorm";
import express from "express";
import bodyParser from "body-parser";

import { Teacher } from "../entity/teacher.entity";
import { Grade } from "../entity/grade.entity";
import { Posting } from "../entity/posting.entity";
import { School } from "../entity/school.entity";

import { getAcademicYear } from "../helpers/getAcademicYear";
import { createUser } from "../helpers/createUser";

const teacher = express.Router();
teacher.use(bodyParser.json());

teacher.get("/", async (req, res) => {
  const user = req.user;
  const schoolRepo = getRepository(School);
  const postingRepo = getRepository(Posting);
  if (user.role === "directorate") {
    const postings = await postingRepo.find();
    res.send({ postings });
  } else {
    // const school = await schoolRepo.findOne({
    //   where: { id: req.user.schoolId },
    // });
    const postings = await postingRepo.find({
      where: { school: { id: req.user.schoolId }, year: getAcademicYear() },
    });
    // const teachers = postings.map((posting) => posting.teacher);
    res.send({ postings });
  }
});

teacher.use((req, res, next) => {
  if (req.user.role === "teacher") res.sendStatus(401);
  else next();
});

teacher.post("/", async (req, res) => {
  // Import neccesary repos
  const gradeRepo = getRepository(Grade);
  const postingRepo = getRepository(Posting);
  const teacherRepo = getRepository(Teacher);
  const schoolRepo = getRepository(School);

  const { email, name, grade, password } = req.body;
  const school = await schoolRepo.findOne({ where: { id: req.user.schoolId } });

  // Create User
  const user = createUser(email, password, "teacher");

  // Get Grade
  const gradeEntity = await gradeRepo.findOne({ where: { value: grade } });

  // Create Teacher
  const teacherEntity = teacherRepo.create({
    user,
    name,
  });

  // Finally, Create PostingEntity
  const postingEntity = postingRepo.create({
    school,
    grade: gradeEntity,
    year: getAcademicYear(),
    teacher: teacherEntity,
  });

  await postingRepo.save(postingEntity);
  res.status(201).send({ message: "Created Teacher successfully" });
});

export default teacher;

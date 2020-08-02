import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import express from "express";

import { User } from "../entity/user.entity";
import { Principal } from "../entity/principal.entity";
import { Teacher } from "../entity/teacher.entity";

import { getAcademicYear } from "../helpers/getAcademicYear";

const auth = express.Router();

auth.post("/login", async (req, res) => {
  // Import neccesary repos
  const principalRepo = getRepository(Principal);
  const teacherRepo = getRepository(Teacher);
  const userRepo = getRepository(User);

  const { email, password } = req.body;
  const user = await userRepo.findOne({
    where: { email },
  });

  if (!user || !user.comparePassword(password)) {
    res.status(401).send({ message: "Invalid credentials" });
    return;
  }

  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
    schoolId: "",
    grade: -1,
  };

  if (user.role === "teacher") {
    // Find the current posting of the teacher
    const teacher = await teacherRepo.findOne({
      where: { user },
      relations: ["postings"],
    });
    const currentAcademicYear = getAcademicYear();
    const currentPosting = teacher.postings.filter(
      (posting) => posting.year === currentAcademicYear
    );
    payload.schoolId = currentPosting[0].school.id;
    payload.grade = currentPosting[0].grade.value;
  } else if (user.role === "principal") {
    // Find the current posting of the principal
    const principal = await principalRepo.findOne({
      where: { user },
      relations: ["school"],
    });
    console.log(principal);
    payload.schoolId = principal.school.id;
  }

  const token = jwt.sign(payload, process.env.SECRET_KEY);

  res.status(200).send({
    email: user.email,
    password: user.password,
    role: user.role,
    grade: payload.grade,
    token,
  });
});

export default auth;

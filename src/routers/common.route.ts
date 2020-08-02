import { getRepository } from "typeorm";
import express from "express";
import bodyParser from "body-parser";

import { Subject } from "../entity/subject.entity";
import { Location } from "../entity/location.entity";
import { Grade } from "../entity/grade.entity";

const common = express.Router();
common.use(bodyParser.json());

common.get("/grades", async (_req, res) => {
  const gradeRepo = getRepository(Grade);
  const grades = await gradeRepo.find();
  res.send({ grades });
});

common.get("/subjects", async (_req, res) => {
  const subjectRepo = getRepository(Subject);
  const subjects = await subjectRepo.find();
  res.send({ subjects });
});

common.get("/location", async (_req, res) => {
  const locationRepo = getRepository(Location);
  const locations = await locationRepo.find();
  res.send({ locations });
});

export default common;

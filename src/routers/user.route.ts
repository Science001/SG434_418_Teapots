import { getRepository } from "typeorm";
import express from "express";
import { User } from "../entity/user.entity";

const user = express.Router();

user.get("/", async (_req, res) => {
  const users = await getRepository(User).find();
  res.send({ users });
});

user.get("/me", async (req, res) => {
  if (req.user) res.send({ user });
  else res.sendStatus(403);
});

export default user;

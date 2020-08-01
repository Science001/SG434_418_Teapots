import { getRepository } from "typeorm";
import express from "express";
import { User } from "../entity/user.entity";
import jwt from "jsonwebtoken";

const auth = express.Router();

auth.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await getRepository(User).findOne({
    where: { email },
  });
  if (!user || !user.comparePassword(password)) {
    throw new Error("Incorrect Email or Password");
  }
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY);

  return { email: user.email, role: user.role, token };
});

export default auth;

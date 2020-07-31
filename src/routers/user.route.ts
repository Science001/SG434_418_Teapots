import { getRepository } from 'typeorm';
import express from "express";
import { User } from '../entity/user.entity';

const user = express.Router();

user.get('/', async (_req, res) => {
    const users = await getRepository(User).find();
    res.send({ users });
})

user.post('/', async (req, res) => {
    const { name } = req.body;
    const userEntity = await getRepository(User).create({ name })
    await getRepository(User).save(userEntity)
    res.send({ message: "Created Successfully" })
})

export default user;
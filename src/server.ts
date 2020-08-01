import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();

import api from './api'

import { createConnection } from "typeorm";

import { Academic } from './entity/academic.entity';
import { Exam } from './entity/exam.entity';
import { Grade } from './entity/grade.entity';
import { Location } from './entity/location.entity';
import { Posting } from './entity/posting.entity';
import { Principal } from './entity/principal.entity';
import { Result } from './entity/result.entity';
import { School } from './entity/school.entity';
import { Student } from './entity/student.entity';
import { Subject } from './entity/subject.entity';
import { Teacher } from './entity/teacher.entity';
import { User } from "./entity/user.entity";


createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [Academic, Exam, Grade, Location, Posting, Principal, Result, School, Student, Subject, Teacher, User],
    logging: ['error'],
    synchronize: true,
    ssl: true,
}).then(connection => {

    const app = express()
    app.use(bodyParser.json())

    if (process.env.NODE_ENV !== "production") {
        app.use(morgan('dev'))
    }

    const userRepo = connection.getRepository(User)

    app.get('/', (_req, res) => {
        res.send('SG434 - Data Storage and Analytics Dashboard')
    })

    app.use('/api', api)

    const PORT = process.env.PORT
    app.listen(PORT, () => console.log(`SG434_418_Teapots running at ${PORT}`))

})
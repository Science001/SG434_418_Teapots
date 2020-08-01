import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    OneToOne,
    JoinColumn,
    OneToMany,
    ManyToOne,
    CreateDateColumn,
    Column,
} from "typeorm";
import { Student } from "./student.entity";
import { Subject } from "./subject.entity";
import { Exam } from "./exam.entity";
import { Grade } from "./grade.entity";
import { Teacher } from "./teacher.entity";

@Entity()
export class Result {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("float")
    marks: number;

    @ManyToOne(() => Exam, exam => exam.results)
    exam: Exam;

    @ManyToOne(() => Student, (student) => student.results)
    student: Student;

    @ManyToOne(() => Subject, (subject) => subject.results)
    subject: Subject;

    @ManyToOne(() => Grade, grade => grade.results)
    grade: Grade;

    @ManyToOne(() => Teacher, teacher => teacher.resultEntries)
    insertedBy: Teacher;

    @CreateDateColumn()
    insertedOn: Date;

}

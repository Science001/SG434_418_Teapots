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
import { Academic } from "./academic.entity";

@Entity()
export class Result {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float")
  mark: number;

  @ManyToOne(() => Exam, (exam) => exam.results, { eager: true })
  exam: Exam;

  @ManyToOne(() => Academic, (academic) => academic.results, { eager: true })
  academic: Academic;

  @ManyToOne(() => Subject, (subject) => subject.results, { eager: true })
  subject: Subject;

  @ManyToOne(() => Teacher, (teacher) => teacher.resultEntries)
  insertedBy: Teacher;

  @CreateDateColumn()
  insertedOn: Date;
}

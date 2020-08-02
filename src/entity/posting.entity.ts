import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { School } from "./school.entity";
import { Grade } from "./grade.entity";
import { Teacher } from "./teacher.entity";

@Entity()
export class Posting {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("integer")
  year: number;

  @ManyToOne(() => School, (school) => school.postings, { eager: true })
  school: School;

  @ManyToOne(() => Grade, (grade) => grade.postings, { eager: true })
  grade: Grade;

  @ManyToOne(() => Teacher, (teacher) => teacher.postings, { cascade: true })
  teacher: Teacher;

  @CreateDateColumn()
  insertedOn: Date;
}

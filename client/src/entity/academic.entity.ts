import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { School } from "./school.entity";
import { Grade } from "./grade.entity";
import { Student } from "./student.entity";
import { Result } from "./result.entity";

@Entity()
export class Academic {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("integer")
  year: number;

  @ManyToOne(() => Student, (student) => student.academics, {
    cascade: true,
    eager: true,
  })
  student: Student;

  @ManyToOne(() => School, (school) => school.academics)
  school: School;

  @ManyToOne(() => Grade, (grade) => grade.academics, { eager: true })
  grade: Grade;

  @OneToMany(() => Result, (result) => result.academic)
  results: Result[];

  @CreateDateColumn()
  insertedOn: Date;
}

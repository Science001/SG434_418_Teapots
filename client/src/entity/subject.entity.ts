import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Grade } from "./grade.entity";
import { Result } from "./result.entity";

@Entity()
export class Subject {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  name: string;

  @ManyToOne(() => Grade, (grade) => grade.subjects, { eager: true })
  grade: Grade;

  @OneToMany(() => Result, (result) => result.subject)
  results: Result[];
}

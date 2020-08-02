import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { Posting } from "./posting.entity";
import { Result } from "./result.entity";
import { User } from "./user.entity";

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;

  @Column("text")
  name: string;

  @Column({ default: false })
  hasResigned: boolean;

  @OneToMany(() => Posting, (posting) => posting.teacher)
  postings: Posting[];

  @OneToMany(() => Result, (result) => result.insertedBy)
  resultEntries: Result[];

  @CreateDateColumn()
  insertedOn: Date;
}

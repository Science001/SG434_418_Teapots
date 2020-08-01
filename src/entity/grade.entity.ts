import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from "typeorm";

import { Subject } from "./subject.entity";
import { Academic } from "./academic.entity";
import { Posting } from "./posting.entity";
import { Result } from "./result.entity";

@Entity()
export class Grade {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar", { length: 5 })
    name: string;

    @OneToMany(() => Subject, (subject) => subject.grade)
    subjects: Subject[];

    @OneToMany(() => Academic, academic => academic.grade)
    academics: Academic[];

    @OneToMany(() => Posting, posting => posting.grade)
    postings: Posting[];

    @OneToMany(() => Result, result => result.grade)
    results: Result[];
}

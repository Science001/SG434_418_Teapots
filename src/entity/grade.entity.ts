import {
    Entity,
    PrimaryColumn,
    OneToMany,
} from "typeorm";

import { Subject } from "./subject.entity";
import { Academic } from "./academic.entity";
import { Posting } from "./posting.entity";
import { Result } from "./result.entity";

@Entity()
export class Grade {

    @PrimaryColumn('integer', { width: 2 })
    value: number;

    @OneToMany(() => Subject, (subject) => subject.grade)
    subjects: Subject[];

    @OneToMany(() => Academic, academic => academic.grade)
    academics: Academic[];

    @OneToMany(() => Posting, posting => posting.grade)
    postings: Posting[];

    @OneToMany(() => Result, result => result.grade)
    results: Result[];
}

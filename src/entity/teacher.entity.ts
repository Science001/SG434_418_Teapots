import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from "typeorm";

import { Posting } from "./posting.entity";
import { Result } from "./result.entity";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("text")
    name: string;

    @Column("varchar", { length: 5 })
    section: string;

    @Column({ default: false })
    hasResigned: boolean;

    @OneToMany(() => Posting, posting => posting.teacher)
    postings: Posting[];

    @OneToMany(() => Result, (result) => result.insertedBy)
    resultEntries: Result[];

    @CreateDateColumn()
    insertedOn: Date;
}

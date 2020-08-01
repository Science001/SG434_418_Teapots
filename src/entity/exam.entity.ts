import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Result } from "./result.entity";

@Entity()
export class Exam {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    name: string;

    @Column("integer")
    academicYear: number;

    @CreateDateColumn()
    insertedOn: Date;

    @OneToMany(() => Result, result => result.exam)
    results: Result[];
}

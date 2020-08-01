import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    CreateDateColumn,
} from "typeorm";

import { Result } from "./result.entity";
import { Academic } from "./academic.entity";

type Gender = 'male' | 'female' | 'other';

@Entity()
export class Student {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 50 })
    name: string;

    @Column("varchar", { length: 5 })
    section: string;

    @Column("varchar", { length: 10 })
    gender: Gender;

    @Column({ default: false })
    hasLeft: boolean;

    @OneToMany(() => Academic, (academic) => academic.student)
    academics: Academic[];

    @OneToMany(() => Result, (result) => result.student)
    results: Result[];

    @CreateDateColumn()
    insertedOn: Date;
}

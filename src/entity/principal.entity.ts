import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { School } from "./school.entity";

@Entity()
export class Principal {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column({ default: false })
    hasResigned: boolean;

    @OneToOne(() => School, school => school.principal)
    @JoinColumn()
    school: School;

}
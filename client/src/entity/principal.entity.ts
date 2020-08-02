import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { School } from "./school.entity";
import { User } from "./user.entity";

@Entity()
export class Principal {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @OneToOne(() => User, { cascade: true })
    @JoinColumn()
    user: User

    @Column()
    name: string;

    @Column({ default: false })
    hasResigned: boolean;

    @OneToOne(() => School, school => school.principal)
    school: School;

}
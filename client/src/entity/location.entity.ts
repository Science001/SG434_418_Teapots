import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { School } from "./school.entity";

@Entity()
export class Location {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 50 })
    district: string;

    @Column("varchar", { length: 50 })
    division: string;

    @OneToMany(() => School, (school) => school.location)
    schools: School[];
}

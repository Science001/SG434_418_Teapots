import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn, OneToOne } from "typeorm";
import { Location } from "./location.entity";
import { Academic } from "./academic.entity";
import { Posting } from "./posting.entity";
import { Principal } from "./principal.entity";

@Entity()
export class School {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar", { length: 50 })
  name: string;

  @ManyToOne(() => Location, (location) => location.schools)
  location: Location;

  @OneToOne(() => Principal, principal => principal.school)
  principal: Principal;

  @OneToMany(() => Academic, academic => academic.school)
  academics: Academic[];

  @OneToMany(() => Posting, posting => posting.school)
  postings: Posting[];

  @CreateDateColumn()
  insertedOn: Date;

}
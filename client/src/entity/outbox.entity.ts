import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Outbox {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    endPoint: string;

    @Column('text')
    body: string;

    @Column('text')
    jwt: string;

    @Column('text')
    userId: string;

    @CreateDateColumn()
    timestamp: Date;

}
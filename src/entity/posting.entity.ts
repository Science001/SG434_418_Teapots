import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { School } from './school.entity';
import { Grade } from './grade.entity';
import { Teacher } from './teacher.entity';

@Entity()
export class Posting {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("integer")
    year: number;

    @ManyToOne(() => School, school => school.postings)
    school: School;

    @ManyToOne(() => Grade, grade => grade.postings)
    grade: Grade;

    @ManyToOne(() => Teacher, (teacher) => teacher.postings)
    teacher: Teacher;

    @CreateDateColumn()
    insertedOn: Date;
}
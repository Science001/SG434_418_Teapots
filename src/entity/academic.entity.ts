import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { School } from './school.entity';
import { Grade } from './grade.entity';
import { Student } from './student.entity';

@Entity()
export class Academic {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("integer")
    year: number;

    @ManyToOne(() => Student, (student) => student.academics)
    student: Student;

    @ManyToOne(() => School, school => school.academics)
    school: School;

    @ManyToOne(() => Grade, grade => grade.academics)
    grade: Grade;

    @CreateDateColumn()
    insertedOn: Date;
}
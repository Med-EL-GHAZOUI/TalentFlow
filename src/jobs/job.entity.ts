import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Department } from '../departments/department.entity';
import { Employee } from '../employees/employee.entity';
import { JobSkill } from './job-skill.entity';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Department, department => department.jobs)
  department: Department;

  @OneToMany(() => Employee, employee => employee.job)
  employees: Employee[];

  @OneToMany(() => JobSkill, jobSkill => jobSkill.job)
  jobSkills: JobSkill[];
}

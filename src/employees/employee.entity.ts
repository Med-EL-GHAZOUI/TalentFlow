import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Department } from '../departments/department.entity';
import { Job } from '../jobs/job.entity';
import { EmployeeSkill } from './employee-skill.entity';
import { User } from '../users/user.entity';
import { Training } from '../trainings/training.entity';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'date', nullable: true })
  hireDate: Date;

  @ManyToOne(() => Department, department => department.employees)
  department: Department;

  @ManyToOne(() => Job, job => job.employees)
  job: Job;

  @OneToMany(() => EmployeeSkill, employeeSkill => employeeSkill.employee)
  employeeSkills: EmployeeSkill[];

  @OneToOne(() => User, user => user.employee, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  user: User;

  @ManyToMany(() => Training, training => training.employees)
  @JoinTable({ name: 'employee_trainings' })
  trainings: Training[];
}

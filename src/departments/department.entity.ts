import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Employee } from '../employees/employee.entity';
import { Job } from '../jobs/job.entity';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Employee, employee => employee.department)
  employees: Employee[];

  @OneToMany(() => Job, job => job.department)
  jobs: Job[];
}

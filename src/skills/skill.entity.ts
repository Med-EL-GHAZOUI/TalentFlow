import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { JobSkill } from '../jobs/job-skill.entity';
import { EmployeeSkill } from '../employees/employee-skill.entity';

@Entity('skills')
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => JobSkill, jobSkill => jobSkill.skill)
  jobSkills: JobSkill[];

  @OneToMany(() => EmployeeSkill, employeeSkill => employeeSkill.skill)
  employeeSkills: EmployeeSkill[];
}

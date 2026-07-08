import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from './employee.entity';
import { Skill } from '../skills/skill.entity';

@Entity('employee_skills')
export class EmployeeSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  acquiredLevel: number;

  @ManyToOne(() => Employee, employee => employee.employeeSkills, { onDelete: 'CASCADE' })
  employee: Employee;

  @ManyToOne(() => Skill, skill => skill.employeeSkills, { onDelete: 'CASCADE' })
  skill: Skill;
}

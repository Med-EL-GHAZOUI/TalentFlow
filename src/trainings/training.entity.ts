import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { Employee } from '../employees/employee.entity';
import { Skill } from '../skills/skill.entity';

@Entity('trainings')
export class Training {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  provider: string;

  @Column({ nullable: true })
  duration: number;

  @Column({ type: 'date', nullable: true })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @ManyToMany(() => Employee, employee => employee.trainings)
  employees: Employee[];

  @ManyToOne(() => Skill)
  targetSkill: Skill;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Job } from './job.entity';
import { Skill } from '../skills/skill.entity';

@Entity('job_skills')
export class JobSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  requiredLevel: number;

  @ManyToOne(() => Job, job => job.jobSkills, { onDelete: 'CASCADE' })
  job: Job;

  @ManyToOne(() => Skill, skill => skill.jobSkills, { onDelete: 'CASCADE' })
  skill: Skill;
}

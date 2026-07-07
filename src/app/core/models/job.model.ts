import { Skill } from './skill.model';

export interface Job {

  id: number;

  title: string;

  description: string;

  requiredSkills: Skill[];

  createdAt: Date;

}

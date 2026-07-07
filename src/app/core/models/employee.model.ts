import { Department } from './department.model';
import { Job } from './job.model';
import { Skill } from './skill.model';

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthDate: Date;
  hireDate: Date;

  department: Department;
  job: Job;

  skills: Skill[];

  status: string;

  createdAt: Date;
  updatedAt: Date;
}

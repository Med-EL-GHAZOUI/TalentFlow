import { Employee } from './employee.model';
import { Job } from './job.model';
import { Skill } from './skill.model';

export interface CompetencyGap {

  employee: Employee;

  job: Job;

  missingSkills: Skill[];

  percentage: number;

}

export interface Recommendation {

  employeeId: number;

  training: string;

  priority: string;

}

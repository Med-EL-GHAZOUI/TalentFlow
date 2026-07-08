import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GpecService } from './gpec.service';
import { GpecController } from './gpec.controller';
import { Campaign } from './campaign.entity';
import { Employee } from '../employees/employee.entity';
import { Job } from '../jobs/job.entity';
import { EmployeeSkill } from '../employees/employee-skill.entity';
import { JobSkill } from '../jobs/job-skill.entity';
import { Training } from '../trainings/training.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign, Employee, Job, EmployeeSkill, JobSkill, Training])],
  controllers: [GpecController],
  providers: [GpecService],
  exports: [GpecService]
})
export class GpecModule {}

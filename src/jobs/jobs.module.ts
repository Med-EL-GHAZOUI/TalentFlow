import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { Job } from './job.entity';
import { JobSkill } from './job-skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job, JobSkill])],
  controllers: [JobsController],
  providers: [JobsService],
  exports: [TypeOrmModule]
})
export class JobsModule {}

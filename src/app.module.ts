import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { DepartmentsModule } from './departments/departments.module';
import { SkillsModule } from './skills/skills.module';
import { JobsModule } from './jobs/jobs.module';
import { TrainingsModule } from './trainings/trainings.module';
import { GpecModule } from './gpec/gpec.module';

@Module({
  imports: [AuthModule, UsersModule, EmployeesModule, DepartmentsModule, SkillsModule, JobsModule, TrainingsModule, GpecModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

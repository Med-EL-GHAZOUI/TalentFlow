import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.entity';
import { EmployeeSkill } from './employee-skill.entity';
import { GpecModule } from '../gpec/gpec.module';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, EmployeeSkill]), GpecModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
  exports: [TypeOrmModule]
})
export class EmployeesModule {}

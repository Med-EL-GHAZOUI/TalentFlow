import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { GpecService } from '../gpec/gpec.service';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
    private gpecService: GpecService
  ) {}

  async getMyDashboard(userId: number) {
    const employee = await this.employeesRepository.findOne({
      where: { user: { id: userId } },
      relations: {
        department: true,
        job: { jobSkills: { skill: true } },
        employeeSkills: { skill: true },
        trainings: { targetSkill: true }
      }
    });

    if (!employee) {
      throw new NotFoundException('Aucun profil collaborateur associé à ce compte.');
    }

    // Get Recommendations for this specific employee
    const allRecommendations = await this.gpecService.generateRecommendations();
    const recommendations = allRecommendations.filter(r => r.employeeId === employee.id);

    return {
      profile: employee,
      recommendations
    };
  }

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const { departmentId, jobId, userId, ...employeeData } = createEmployeeDto;
    const employee = this.employeesRepository.create({
      ...employeeData,
      department: departmentId ? { id: departmentId } as any : null,
      job: jobId ? { id: jobId } as any : null,
      user: userId ? { id: userId } as any : null,
    });
    return this.employeesRepository.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    return this.employeesRepository.find({ relations: { department: true, job: true, employeeSkills: { skill: true }, user: true, trainings: true } });
  }

  async findOne(id: number): Promise<Employee> {
    const employee = await this.employeesRepository.findOne({ 
      where: { id },
      relations: { department: true, job: true, employeeSkills: { skill: true }, user: true, trainings: true }
    });
    if (!employee) {
      throw new NotFoundException(`Employee #${id} not found`);
    }
    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.findOne(id);
    const { departmentId, jobId, userId, ...employeeData } = updateEmployeeDto;
    
    this.employeesRepository.merge(employee, employeeData);
    if (departmentId !== undefined) {
      employee.department = departmentId ? { id: departmentId } as any : null;
    }
    if (jobId !== undefined) {
      employee.job = jobId ? { id: jobId } as any : null;
    }
    if (userId !== undefined) {
      employee.user = userId ? { id: userId } as any : null;
    }

    return this.employeesRepository.save(employee);
  }

  async remove(id: number): Promise<void> {
    const employee = await this.findOne(id);
    await this.employeesRepository.remove(employee);
  }
}

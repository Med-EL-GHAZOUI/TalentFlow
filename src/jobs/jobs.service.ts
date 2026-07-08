import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const { departmentId, ...jobData } = createJobDto;
    const job = this.jobsRepository.create({
      ...jobData,
      department: departmentId ? { id: departmentId } as any : null,
    });
    return this.jobsRepository.save(job);
  }

  async findAll(): Promise<Job[]> {
    return this.jobsRepository.find({ relations: { department: true, jobSkills: { skill: true } } });
  }

  async findOne(id: number): Promise<Job> {
    const job = await this.jobsRepository.findOne({ 
      where: { id },
      relations: { department: true, jobSkills: { skill: true } }
    });
    if (!job) {
      throw new NotFoundException(`Job #${id} not found`);
    }
    return job;
  }

  async update(id: number, updateJobDto: UpdateJobDto): Promise<Job> {
    const job = await this.findOne(id);
    const { departmentId, ...jobData } = updateJobDto;
    
    this.jobsRepository.merge(job, jobData);
    if (departmentId !== undefined) {
      job.department = departmentId ? { id: departmentId } as any : null;
    }

    return this.jobsRepository.save(job);
  }

  async remove(id: number): Promise<void> {
    const job = await this.findOne(id);
    await this.jobsRepository.remove(job);
  }
}

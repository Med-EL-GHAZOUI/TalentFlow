import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Training } from './training.entity';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';

@Injectable()
export class TrainingsService {
  constructor(
    @InjectRepository(Training)
    private trainingsRepository: Repository<Training>,
  ) {}

  async create(createTrainingDto: any): Promise<Training> {
    const { targetSkillId, ...rest } = createTrainingDto;
    const training = this.trainingsRepository.create(rest as import('typeorm').DeepPartial<Training>);
    if (targetSkillId) {
      training.targetSkill = { id: targetSkillId } as any;
    }
    return this.trainingsRepository.save(training);
  }

  async findAll(): Promise<Training[]> {
    return this.trainingsRepository.find({ relations: { employees: true, targetSkill: true } });
  }

  async findOne(id: number): Promise<Training> {
    const training = await this.trainingsRepository.findOne({ 
      where: { id },
      relations: { employees: true, targetSkill: true }
    });
    if (!training) {
      throw new NotFoundException(`Training #${id} not found`);
    }
    return training;
  }

  async update(id: number, updateTrainingDto: any): Promise<Training> {
    const training = await this.findOne(id);
    const { targetSkillId, ...rest } = updateTrainingDto;
    this.trainingsRepository.merge(training, rest);
    if (targetSkillId) {
      training.targetSkill = { id: targetSkillId } as any;
    }
    return this.trainingsRepository.save(training);
  }

  async remove(id: number): Promise<void> {
    const training = await this.findOne(id);
    await this.trainingsRepository.remove(training);
  }
}

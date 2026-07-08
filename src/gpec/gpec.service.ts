import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employees/employee.entity';
import { Training } from '../trainings/training.entity';

@Injectable()
export class GpecService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
    @InjectRepository(Training)
    private readonly trainingRepo: Repository<Training>
  ) {}

  async calculateCompetencyGaps() {
    // 1. Fetch employees with their job, required skills, and current skills
    const employees = await this.employeeRepo.find({
      relations: {
        job: {
          jobSkills: {
            skill: true
          }
        },
        employeeSkills: {
          skill: true
        }
      }
    });

    const gaps: any[] = [];

    // 2. Iterate and compare
    for (const employee of employees) {
      if (!employee.job || !employee.job.jobSkills) continue;

      const employeeName = `${employee.firstName} ${employee.lastName}`;

      for (const jobSkill of employee.job.jobSkills) {
        if (!jobSkill.skill) continue;

        const skillName = jobSkill.skill.name;
        const requiredLevel = jobSkill.requiredLevel;

        // Find if employee has this skill
        const empSkill = employee.employeeSkills?.find(es => es.skill?.id === jobSkill.skill.id);
        const currentLevel = empSkill ? empSkill.acquiredLevel : 0;

        // Add to the gap list
        gaps.push({
          employee: employeeName,
          employeeId: employee.id,
          skill: skillName,
          skillId: jobSkill.skill.id,
          required: requiredLevel,
          current: currentLevel,
          gap: currentLevel - requiredLevel // Negative means deficit
        });
      }
    }

    return gaps;
  }

  async generateRecommendations() {
    const gaps = await this.calculateCompetencyGaps();
    const deficits = gaps.filter(g => g.gap < 0);
    
    // Fetch all trainings with their target skill
    const trainings = await this.trainingRepo.find({ relations: { targetSkill: true } });
    
    const recommendations: any[] = [];

    for (const deficit of deficits) {
      // Find a training that targets this skill
      const matchingTrainings = trainings.filter(t => t.targetSkill?.id === deficit.skillId);
      
      for (const training of matchingTrainings) {
        let priority = 'Basse';
        if (deficit.gap <= -2) {
          priority = 'Haute';
        } else if (deficit.gap === -1) {
          priority = 'Moyenne';
        }

        // Generate a random affinity score between 75 and 98 just for UI aesthetics
        const affinity = Math.floor(Math.random() * (98 - 75 + 1) + 75);

        recommendations.push({
          employee: deficit.employee,
          employeeId: deficit.employeeId,
          training: training.title,
          trainingId: training.id,
          skill: deficit.skill,
          priority: priority,
          affinity: affinity
        });
      }
    }

    return recommendations;
  }
}

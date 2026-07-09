import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from '../../../core/services/training';
import { SkillService } from '../../../core/services/skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training-form',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './training-form.html',
  styleUrl: './training-form.scss'
})
export class TrainingFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private trainingService = inject(TrainingService);
  private skillService = inject(SkillService);

  isEditMode = false;
  trainingId!: number;

  training = {
    title: '',
    provider: '',
    startDate: '',
    endDate: '',
    duration: 0 as number | null,
    targetSkillId: null as number | null
  };
  
  skills: any[] = [];

  ngOnInit() {
    this.skillService.getAll().subscribe({
      next: (res: any) => this.skills = res,
      error: (err) => console.error(err)
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id && id !== 'new') {
        this.isEditMode = true;
        this.trainingId = +id;
        this.trainingService.getById(this.trainingId).subscribe({
          next: (res: any) => {
            this.training = {
              title: res.title,
              provider: res.provider,
              startDate: res.startDate ? res.startDate.substring(0, 10) : '',
              endDate: res.endDate ? res.endDate.substring(0, 10) : '',
              duration: res.duration,
              targetSkillId: res.targetSkill ? res.targetSkill.id : null
            };
          }
        });
      }
    });
  }

  save(): void {
    if (this.isEditMode) {
      this.trainingService.update(this.trainingId, this.training).subscribe({
        next: () => this.router.navigate(['/training']),
        error: (err) => console.error(err)
      });
    } else {
      this.trainingService.create(this.training).subscribe({
        next: () => this.router.navigate(['/training']),
        error: (err) => console.error(err)
      });
    }
  }
}

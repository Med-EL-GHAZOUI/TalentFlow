import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { SkillService } from '../../../core/services/skill';

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './skill-form.html',
  styleUrl: './skill-form.scss'
})
export class SkillFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private skillService = inject(SkillService);

  isEditMode = false;
  skillId!: number;

  skill = {
    name: '',
    category: '',
    description: ''
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id && id !== 'new') {
        this.isEditMode = true;
        this.skillId = +id;
        this.skillService.getById(this.skillId).subscribe({
          next: (res: any) => {
            this.skill = {
              name: res.name,
              category: res.category,
              description: res.description
            };
          }
        });
      }
    });
  }

  save(): void {
    if (this.isEditMode) {
      this.skillService.update(this.skillId, this.skill).subscribe({
        next: () => this.router.navigate(['/skills']),
        error: (err) => console.error(err)
      });
    } else {
      this.skillService.create(this.skill).subscribe({
        next: () => this.router.navigate(['/skills']),
        error: (err) => console.error(err)
      });
    }
  }
}

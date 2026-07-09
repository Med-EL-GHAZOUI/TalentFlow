import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkillService } from '../../../core/services/skill';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.scss'
})
export class SkillListComponent implements OnInit {
  private skillService = inject(SkillService);

  allSkills: any[] = [];
  skills: any[] = [];

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.skillService.getAll().subscribe({
      next: (data: any) => {
        this.allSkills = data;
        this.skills = [...this.allSkills];
      },
      error: (err) => console.error('Erreur chargement compétences:', err)
    });
  }

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cette compétence ?')) {
      this.skillService.delete(id).subscribe({
        next: () => {
          this.allSkills = this.allSkills.filter(s => s.id !== id);
          this.skills = this.skills.filter(s => s.id !== id);
        },
        error: (err) => console.error('Erreur suppression:', err)
      });
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.skills = [...this.allSkills];
      return;
    }
    this.skills = this.allSkills.filter(s => 
      (s.name || '').toLowerCase().includes(searchTerm) || 
      (s.category || '').toLowerCase().includes(searchTerm)
    );
  }
}

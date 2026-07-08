import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.scss'
})
export class SkillListComponent {

  allSkills = [
    {
      id:1,
      name:'Gestion de Production Agricole',
      category:'Agricole',
      level:4
    },
    {
      id:2,
      name:'Contrôle Qualité Sanitaire',
      category:'Qualité',
      level:5
    },
    {
      id:3,
      name:'Logistique Chaîne du Froid',
      category:'Logistique',
      level:3
    }
  ];

  skills = [...this.allSkills];

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cette compétence ?')) {
      this.allSkills = this.allSkills.filter(s => s.id !== id);
      this.skills = this.skills.filter(s => s.id !== id);
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.skills = [...this.allSkills];
      return;
    }
    this.skills = this.allSkills.filter(s => 
      s.name.toLowerCase().includes(searchTerm) || 
      s.category.toLowerCase().includes(searchTerm)
    );
  }

}

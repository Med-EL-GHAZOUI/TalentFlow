import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './skill-form.html',
  styleUrl: './skill-form.scss'
})
export class SkillFormComponent {

  skill = {
    name: '',
    category: '',
    level: 1,
    description: ''
  };

  save(): void {
    console.log(this.skill);
  }

}

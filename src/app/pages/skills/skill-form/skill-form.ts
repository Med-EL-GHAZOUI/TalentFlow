import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [FormsModule],
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

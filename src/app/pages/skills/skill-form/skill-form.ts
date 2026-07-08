import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './skill-form.html',
  styleUrl: './skill-form.scss'
})
export class SkillFormComponent implements OnInit {

  isEditMode = false;

  skill = {
    name: '',
    category: '',
    level: 1,
    description: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        // Mock data
        this.skill = {
          name: 'React.js',
          category: 'Frontend',
          level: 4,
          description: 'Maîtrise du framework'
        };
      }
    });
  }

  save(): void {
    console.log(this.skill);
    setTimeout(() => this.router.navigate(['/skills']), 400);
  }

}

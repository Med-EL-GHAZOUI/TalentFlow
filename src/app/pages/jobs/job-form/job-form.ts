import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './job-form.html',
  styleUrl: './job-form.scss'
})
export class JobFormComponent implements OnInit {

  isEditMode = false;

  job = {
    title: '',
    description: '',
    department: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        // Mock data
        this.job = {
          title: 'Directeur Général',
          description: 'Responsable de la direction de COPAG.',
          department: 'Direction'
        };
      }
    });
  }

  save(): void {
    console.log(this.job);
    setTimeout(() => this.router.navigate(['/jobs']), 400);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-training-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './training-form.html',
  styleUrl: './training-form.scss'
})
export class TrainingFormComponent implements OnInit {

  isEditMode = false;

  training = {
    title: '',
    provider: '',
    startDate: '',
    endDate: '',
    duration: 0
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        // Mock data
        this.training = {
          title: 'Leadership & Management',
          provider: 'HEC Executive',
          startDate: '2026-08-01',
          endDate: '2026-08-05',
          duration: 35
        };
      }
    });
  }

  save(): void {
    console.log(this.training);
    setTimeout(() => this.router.navigate(['/training']), 400);
  }

}

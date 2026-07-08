import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-training-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './training-form.html',
  styleUrl: './training-form.scss'
})
export class TrainingFormComponent {

  training = {
    title: '',
    provider: '',
    startDate: '',
    endDate: '',
    duration: 0
  };

  save(): void {
    console.log(this.training);
  }

}

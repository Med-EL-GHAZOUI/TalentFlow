import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './job-form.html',
  styleUrl: './job-form.scss'
})
export class JobFormComponent {

  job = {
    title: '',
    description: '',
    department: ''
  };

  save(): void {
    console.log(this.job);
  }

}

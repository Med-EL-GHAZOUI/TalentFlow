import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gpec-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gpec-dashboard.html',
  styleUrl: './gpec-dashboard.scss'
})
export class GpecDashboardComponent {

  employees = 125;
  competencyGaps = 28;
  trainings = 16;
  recommendations = 42;

}

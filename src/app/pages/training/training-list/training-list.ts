import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-training-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './training-list.html',
  styleUrl: './training-list.scss'
})
export class TrainingListComponent {

  trainings = [
    {
      id: 1,
      title: 'Angular Avancé',
      provider: 'OpenClassrooms',
      duration: 40,
      startDate: '2026-07-15'
    },
    {
      id: 2,
      title: 'Spring Boot Expert',
      provider: 'Udemy',
      duration: 30,
      startDate: '2026-08-01'
    }
  ];

}

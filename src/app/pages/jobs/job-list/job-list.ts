import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-list.html',
  styleUrl: './job-list.scss'
})
export class JobListComponent {

  jobs = [
    {
      id: 1,
      title: 'Développeur Full Stack',
      department: 'Informatique (IT)'
    },
    {
      id: 2,
      title: 'Responsable RH',
      department: 'Ressources Humaines'
    }
  ];

}

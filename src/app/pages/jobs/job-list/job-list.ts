import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list',
  standalone: true,
  templateUrl: './job-list.html',
  styleUrl: './job-list.scss'
})
export class JobListComponent {

  jobs = [

    {
      id: 1,
      title: 'Développeur Full Stack',
      department: 'IT'
    },

    {
      id: 2,
      title: 'Responsable RH',
      department: 'RH'
    }

  ];

}

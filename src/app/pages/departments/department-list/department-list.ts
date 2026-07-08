import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './department-list.html',
  styleUrl: './department-list.scss'
})
export class DepartmentListComponent {

  departments = [
    {
      id:1,
      name:'Informatique',
      manager:'Mohamed'
    },
    {
      id:2,
      name:'Ressources Humaines',
      manager:'Ahmed'
    },
    {
      id:3,
      name:'Finance & Comptabilité',
      manager:'Fatima'
    }
  ];

}

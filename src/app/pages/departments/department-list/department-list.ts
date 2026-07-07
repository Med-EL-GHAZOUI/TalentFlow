import { Component } from '@angular/core';

@Component({
  selector: 'app-department-list',
  standalone: true,
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
      name:'RH',
      manager:'Ahmed'
    },

    {
      id:3,
      name:'Finance',
      manager:'Fatima'
    }

  ];

}

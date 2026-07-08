import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss'
})
export class EmployeeListComponent {

  employees = [

    {
      id:1,
      firstname:'Mohamed',
      lastname:'EL GHAZOUI',
      email:'mohamed@gmail.com',
      department:'IT',
      job:'Developer'
    },

    {
      id:2,
      firstname:'Ahmed',
      lastname:'Alaoui',
      email:'ahmed@gmail.com',
      department:'HR',
      job:'Manager'
    }

  ];

}

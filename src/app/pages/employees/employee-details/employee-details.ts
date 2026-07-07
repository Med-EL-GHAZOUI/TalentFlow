import { Component } from '@angular/core';

@Component({
  selector:'app-employee-details',
  standalone:true,
  templateUrl:'./employee-details.html',
  styleUrl:'./employee-details.scss'
})
export class EmployeeDetailsComponent{

  employee={

    id:1,

    firstname:'Mohamed',

    lastname:'EL GHAZOUI',

    email:'mohamed@gmail.com',

    phone:'0600000000',

    department:'IT',

    job:'Developer'

  };

}

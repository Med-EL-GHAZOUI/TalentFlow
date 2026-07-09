import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector:'app-employee-details',
  standalone:true,
  imports: [RouterLink],
  templateUrl:'./employee-details.html',
  styleUrl:'./employee-details.scss'
})
export class EmployeeDetailsComponent{

  employee={
    id:1,
    firstName:'Mohamed',
    lastName:'EL GHAZOUI',
    email:'mohamed@gmail.com',
    phone:'0600000000',
    department:'IT',
    job:'Developer'
  };

}

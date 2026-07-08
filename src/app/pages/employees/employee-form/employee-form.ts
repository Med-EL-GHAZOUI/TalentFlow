import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector:'app-employee-form',
  standalone:true,
  imports:[FormsModule, RouterLink],
  templateUrl:'./employee-form.html',
  styleUrl:'./employee-form.scss'
})
export class EmployeeFormComponent{

  employee={
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    department:'',
    job:''
  };

  save(){
    console.log(this.employee);
  }

}

export class EmployeeForm {}

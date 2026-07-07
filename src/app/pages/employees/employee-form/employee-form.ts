import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'app-employee-form',
  standalone:true,
  imports:[FormsModule],
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

export class EmployeeForm {
}

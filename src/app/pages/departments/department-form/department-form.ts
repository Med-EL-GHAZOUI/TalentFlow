import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-form.html',
  styleUrl: './department-form.scss'
})
export class DepartmentFormComponent {

  department = {

    name: '',

    description: '',

    manager: ''

  };

  save() {

    console.log(this.department);

  }

}

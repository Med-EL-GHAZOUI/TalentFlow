import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss'
})
export class EmployeeFormComponent implements OnInit {

  isEditMode = false;

  employee = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    department: '',
    job: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        // Mock data
        this.employee = {
          firstname: 'Mohamed',
          lastname: 'EL GHAZOUI',
          email: 'mohamed@gmail.com',
          phone: '0600000000',
          department: 'IT',
          job: 'Developer'
        };
      }
    });
  }

  save() {
    console.log('Saving employee:', this.employee);
    // Simulate save delay then navigate
    setTimeout(() => {
      this.router.navigate(['/employees']);
    }, 400);
  }

}

export class EmployeeForm {}

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

  allEmployees = [
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

  employees = [...this.allEmployees];

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet employé ?')) {
      this.allEmployees = this.allEmployees.filter(e => e.id !== id);
      this.employees = this.employees.filter(e => e.id !== id);
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.employees = [...this.allEmployees];
      return;
    }
    this.employees = this.allEmployees.filter(e => 
      e.firstname.toLowerCase().includes(searchTerm) || 
      e.lastname.toLowerCase().includes(searchTerm) ||
      e.department.toLowerCase().includes(searchTerm) ||
      e.job.toLowerCase().includes(searchTerm)
    );
  }

}

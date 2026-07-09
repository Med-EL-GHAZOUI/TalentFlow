import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../../core/services/employee';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss'
})
export class EmployeeListComponent implements OnInit {
  private employeeService = inject(EmployeeService);

  allEmployees: Employee[] = [];
  employees: Employee[] = [];

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAll().subscribe({
      next: (data) => {
        this.allEmployees = data;
        this.employees = [...this.allEmployees];
      },
      error: (err) => console.error('Erreur chargement employés:', err)
    });
  }

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet employé ?')) {
      this.employeeService.delete(id).subscribe({
        next: () => {
          this.allEmployees = this.allEmployees.filter(e => e.id !== id);
          this.employees = this.employees.filter(e => e.id !== id);
        },
        error: (err) => console.error('Erreur suppression:', err)
      });
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.employees = [...this.allEmployees];
      return;
    }
    this.employees = this.allEmployees.filter(e => 
      e.firstName.toLowerCase().includes(searchTerm) || 
      e.lastName.toLowerCase().includes(searchTerm) ||
      (e.department?.name || '').toLowerCase().includes(searchTerm) ||
      (e.job?.title || '').toLowerCase().includes(searchTerm)
    );
  }
}

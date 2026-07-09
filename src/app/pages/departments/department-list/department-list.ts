import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DepartmentService } from '../../../core/services/department';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './department-list.html',
  styleUrl: './department-list.scss'
})
export class DepartmentListComponent implements OnInit {
  private departmentService = inject(DepartmentService);

  allDepartments: any[] = [];
  departments: any[] = [];

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getAll().subscribe({
      next: (data: any) => {
        this.allDepartments = data;
        this.departments = [...this.allDepartments];
      },
      error: (err) => console.error('Erreur chargement départements:', err)
    });
  }

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce département ?')) {
      this.departmentService.delete(id).subscribe({
        next: () => {
          this.allDepartments = this.allDepartments.filter(d => d.id !== id);
          this.departments = this.departments.filter(d => d.id !== id);
        },
        error: (err) => console.error('Erreur suppression:', err)
      });
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.departments = [...this.allDepartments];
      return;
    }
    this.departments = this.allDepartments.filter(d => 
      (d.name || '').toLowerCase().includes(searchTerm)
    );
  }
}

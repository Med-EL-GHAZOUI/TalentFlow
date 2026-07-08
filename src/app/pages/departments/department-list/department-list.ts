import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './department-list.html',
  styleUrl: './department-list.scss'
})
export class DepartmentListComponent {

  allDepartments = [
    {
      id:1,
      name:'Informatique',
      manager:'Mohamed'
    },
    {
      id:2,
      name:'Ressources Humaines',
      manager:'Ahmed'
    },
    {
      id:3,
      name:'Finance & Comptabilité',
      manager:'Fatima'
    }
  ];

  departments = [...this.allDepartments];

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce département ?')) {
      this.allDepartments = this.allDepartments.filter(d => d.id !== id);
      this.departments = this.departments.filter(d => d.id !== id);
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.departments = [...this.allDepartments];
      return;
    }
    this.departments = this.allDepartments.filter(d => 
      d.name.toLowerCase().includes(searchTerm) || 
      d.manager.toLowerCase().includes(searchTerm)
    );
  }

}

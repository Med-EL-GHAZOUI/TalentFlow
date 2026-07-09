import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../../core/services/department';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './department-form.html',
  styleUrl: './department-form.scss'
})
export class DepartmentFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private departmentService = inject(DepartmentService);

  isEditMode = false;
  departmentId!: number;

  department = {
    name: '',
    description: '',
    manager: ''
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id && id !== 'new') {
        this.isEditMode = true;
        this.departmentId = +id;
        this.departmentService.getById(this.departmentId).subscribe({
          next: (res: any) => {
            this.department = {
              name: res.name || '',
              description: res.description || '',
              manager: res.manager || ''
            };
          }
        });
      }
    });
  }

  save() {
    if (this.isEditMode) {
      this.departmentService.update(this.departmentId, this.department).subscribe({
        next: () => this.router.navigate(['/departments']),
        error: (err) => console.error(err)
      });
    } else {
      this.departmentService.create(this.department).subscribe({
        next: () => this.router.navigate(['/departments']),
        error: (err) => console.error(err)
      });
    }
  }
}

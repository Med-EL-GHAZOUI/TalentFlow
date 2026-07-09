import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../core/services/employee';
import { DepartmentService } from '../../../core/services/department';
import { JobService } from '../../../core/services/job';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss'
})
export class EmployeeFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private employeeService = inject(EmployeeService);
  private departmentService = inject(DepartmentService);
  private jobService = inject(JobService);

  isEditMode = false;
  employeeId!: number;

  departments: any[] = [];
  jobs: any[] = [];

  employee = {
    firstName: '',
    lastName: '',
    departmentId: null as number | null,
    jobId: null as number | null
  };

  ngOnInit() {
    this.departmentService.getAll().subscribe((res: any) => this.departments = res);
    this.jobService.getAll().subscribe((res: any) => this.jobs = res);

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id && id !== 'new') {
        this.isEditMode = true;
        this.employeeId = +id;
        this.employeeService.getById(this.employeeId).subscribe({
          next: (res: any) => {
            this.employee = {
              firstName: res.firstName,
              lastName: res.lastName,
              departmentId: res.department?.id || null,
              jobId: res.job?.id || null
            };
          }
        });
      }
    });
  }

  save() {
    if (this.isEditMode) {
      this.employeeService.update(this.employeeId, this.employee).subscribe({
        next: () => this.router.navigate(['/employees']),
        error: (err) => console.error(err)
      });
    } else {
      this.employeeService.create(this.employee).subscribe({
        next: () => this.router.navigate(['/employees']),
        error: (err) => console.error(err)
      });
    }
  }
}

export class EmployeeForm {}

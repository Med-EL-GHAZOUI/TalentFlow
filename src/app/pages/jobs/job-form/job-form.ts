import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../../core/services/job';
import { DepartmentService } from '../../../core/services/department';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './job-form.html',
  styleUrl: './job-form.scss'
})
export class JobFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private jobService = inject(JobService);
  private departmentService = inject(DepartmentService);

  isEditMode = false;
  jobId!: number;

  departments: any[] = [];

  job = {
    title: '',
    description: '',
    departmentId: null as number | null
  };

  ngOnInit() {
    this.departmentService.getAll().subscribe((res: any) => this.departments = res);

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id && id !== 'new') {
        this.isEditMode = true;
        this.jobId = +id;
        this.jobService.getById(this.jobId).subscribe({
          next: (res: any) => {
            this.job = {
              title: res.title,
              description: res.description,
              departmentId: res.department?.id || null
            };
          }
        });
      }
    });
  }

  save(): void {
    if (this.isEditMode) {
      this.jobService.update(this.jobId, this.job).subscribe({
        next: () => this.router.navigate(['/jobs']),
        error: (err) => console.error(err)
      });
    } else {
      this.jobService.create(this.job).subscribe({
        next: () => this.router.navigate(['/jobs']),
        error: (err) => console.error(err)
      });
    }
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../core/services/employee';
import { DepartmentService } from '../../core/services/department';
import { JobService } from '../../core/services/job';
import { TrainingService } from '../../core/services/training';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent implements OnInit {
  private employeeService = inject(EmployeeService);
  private departmentService = inject(DepartmentService);
  private jobService = inject(JobService);
  private trainingService = inject(TrainingService);

  totalEmployees = 0;
  totalDepartments = 0;
  totalJobs = 0;
  totalTrainings = 0;
  
  recentHires: any[] = [];

  ngOnInit() {
    this.employeeService.getAll().subscribe({
      next: (res: any) => {
        this.totalEmployees = res.length;
        // Prends les 3 derniers
        this.recentHires = [...res].reverse().slice(0, 3);
      }
    });
    this.departmentService.getAll().subscribe({
      next: (res: any) => this.totalDepartments = res.length
    });
    this.jobService.getAll().subscribe({
      next: (res: any) => this.totalJobs = res.length
    });
    this.trainingService.getAll().subscribe({
      next: (res: any) => this.totalTrainings = res.length
    });
  }
}

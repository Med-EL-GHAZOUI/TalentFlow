import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-dashboard.html',
  styleUrl: './my-dashboard.scss',
})
export class MyDashboard implements OnInit {
  private employeeService = inject(EmployeeService);
  private cdr = inject(ChangeDetectorRef);

  dashboardData: any = null;
  isLoading = true;
  errorMessage: string = '';

  ngOnInit() {
    this.employeeService.getMyDashboard().subscribe({
      next: (res) => {
        this.dashboardData = res;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = err?.error?.message || "Aucun profil collaborateur associé à ce compte ou erreur serveur.";
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  getSeniority(hireDate: string) {
    if (!hireDate) return 0;
    const years = new Date().getFullYear() - new Date(hireDate).getFullYear();
    return years > 0 ? years : '< 1';
  }

  getSkillPercentage(level: number) {
    // 5 levels: 1 = 20%, 5 = 100%
    return (level / 5) * 100;
  }

  getSkillLabel(level: number) {
    if (level >= 5) return 'Expert';
    if (level >= 4) return 'Avancé';
    if (level >= 3) return 'Intermédiaire';
    if (level >= 2) return 'Basique';
    return 'Débutant';
  }

  getSkillColor(level: number) {
    if (level >= 5) return 'emerald';
    if (level >= 3) return 'amber';
    return 'cyan';
  }
}

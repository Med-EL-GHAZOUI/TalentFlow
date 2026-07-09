import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../../core/services/employee';

@Component({
  selector: 'app-team-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './team-dashboard.html',
  styleUrl: './team-dashboard.scss',
})
export class TeamDashboard implements OnInit {
  private employeeService = inject(EmployeeService);

  teamMembers: any[] = [];
  isLoading = true;
  totalMembers = 0;
  averageSkillCoverage = 0;

  ngOnInit() {
    this.employeeService.getAll().subscribe({
      next: (res) => {
        // Filter out those without name if needed, but here we just take all
        this.teamMembers = res.filter(e => e.firstName && e.lastName);
        this.totalMembers = this.teamMembers.length;
        
        // Calculate average skill coverage based on employeeSkills
        let totalCoverage = 0;
        let count = 0;
        this.teamMembers.forEach(member => {
          if (member.employeeSkills && member.employeeSkills.length > 0) {
            let memberCoverage = 0;
            member.employeeSkills.forEach((sk: any) => {
              memberCoverage += (sk.acquiredLevel / 5) * 100;
            });
            totalCoverage += (memberCoverage / member.employeeSkills.length);
            count++;
          }
        });
        
        this.averageSkillCoverage = count > 0 ? Math.round(totalCoverage / count) : 0;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  getInitials(firstName: string, lastName: string) {
    if (!firstName || !lastName) return 'U';
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }

  getAverageLevel(skills: any[]) {
    if (!skills || skills.length === 0) return 0;
    const total = skills.reduce((sum, sk) => sum + sk.acquiredLevel, 0);
    return total / skills.length;
  }

  getCoverageColor(coverage: number) {
    if (coverage >= 80) return 'emerald';
    if (coverage >= 50) return 'amber';
    return 'rose';
  }
}

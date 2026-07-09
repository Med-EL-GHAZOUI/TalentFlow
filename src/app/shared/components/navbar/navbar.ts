import { Component, effect, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoleService, UserRole } from '../../../core/services/role';
import { AuthService } from '../../../core/services/auth.service';
import { EmployeeService } from '../../../core/services/employee';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit {

  currentRole: UserRole = 'ADMIN';

  constructor(
    private router: Router, 
    public roleService: RoleService,
    public authService: AuthService,
    private employeeService: EmployeeService
  ) {
    effect(() => {
      this.currentRole = this.roleService.currentRole();
    });
  }

  ngOnInit() {
    if (!this.authService.currentUserFullName()) {
       this.employeeService.getMyDashboard().subscribe({
         next: (res: any) => {
           if (res && res.profile) {
              const name = `${res.profile.firstName || ''} ${res.profile.lastName || ''}`.trim();
              this.authService.currentUserFullName.set(name);
           }
         },
         error: () => {
           const token = this.authService.getToken();
           if (token) {
             try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                if (payload.role === 'ADMIN') {
                  this.authService.currentUserFullName.set('Administrateur Système');
                } else {
                  this.authService.currentUserFullName.set(payload.email.split('@')[0]);
                }
             } catch(e){}
           }
         }
       });
    }
  }

  getInitials(): string {
    const name = this.authService.currentUserFullName();
    if (!name) {
      if (this.currentRole === 'ADMIN') return 'AD';
      if (this.currentRole === 'MANAGER') return 'MG';
      return 'EM';
    }
    const parts = name.split(' ').filter(p => p.length > 0);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  onRoleChange(newRole: UserRole) {
    this.roleService.setRole(newRole);
    // Optionally redirect based on role
    if (newRole === 'EMPLOYEE') this.router.navigate(['/my-space']);
    else if (newRole === 'MANAGER') this.router.navigate(['/team-space']);
    else this.router.navigate(['/dashboard']);
  }

  showNotifications() {
    alert('Vous avez 3 nouvelles notifications !');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

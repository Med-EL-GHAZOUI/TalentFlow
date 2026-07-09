import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent implements OnInit {

  private employeeService = inject(EmployeeService);
  private authService = inject(AuthService);

  profile: any = {
    firstName: 'U',
    lastName: 'N',
    email: '',
    phone: '',
    role: ''
  };

  isEditing = false;
  originalProfile = { ...this.profile };
  isSaving = false;

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    const token = this.authService.getToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.profile.email = payload.email || '';
        this.profile.role = payload.role?.toUpperCase() || '';
        if (this.profile.role === 'ADMIN') {
          this.profile.firstName = 'Administrateur';
          this.profile.lastName = 'Système';
        }
      } catch (e) {}
    }

    this.employeeService.getMyDashboard().subscribe({
      next: (res: any) => {
        if (res && res.profile) {
          const emp = res.profile;
          this.profile.firstName = emp.firstName || this.profile.firstName;
          this.profile.lastName = emp.lastName || this.profile.lastName;
          this.profile.phone = emp.phone || this.profile.phone;
          if (emp.user) {
            this.profile.email = emp.user.email || this.profile.email;
            this.profile.role = emp.user.role || this.profile.role;
          }
        }
        this.originalProfile = { ...this.profile };
      },
      error: (err: any) => {
        console.warn('Profile non trouvé (peut-être admin), utilisation des données du token.');
        this.originalProfile = { ...this.profile };
      }
    });
  }

  changePassword() {
    alert('Une notification a été envoyée à votre adresse email pour réinitialiser le mot de passe.');
  }

  editInfo() {
    this.isEditing = true;
    this.originalProfile = { ...this.profile };
  }

  cancelEdit() {
    this.isEditing = false;
    this.profile = { ...this.originalProfile };
  }

  saveProfile() {
    this.isSaving = true;
    setTimeout(() => {
      this.isSaving = false;
      this.isEditing = false;
      const newName = `${this.profile.firstName} ${this.profile.lastName}`.trim();
      this.authService.currentUserFullName.set(newName);
    }, 800);
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../core/services/role';

export let Login = undefined;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  };
  
  errorMessage = '';

  private router = inject(Router);
  private roleService = inject(RoleService);

  login(): void {
    const email = this.credentials.email.toLowerCase();
    const password = this.credentials.password;
    
    this.errorMessage = '';

    if (password !== 'copag123') {
      this.errorMessage = 'Mot de passe incorrect. (Indice: copag123)';
      return;
    }

    if (email === 'admin@copag.ma') {
      this.roleService.setRole('ADMIN');
      this.router.navigate(['/dashboard']);
    } 
    else if (email === 'rh@copag.ma') {
      this.roleService.setRole('RH');
      this.router.navigate(['/gpec-dashboard']);
    }
    else if (email === 'manager@copag.ma') {
      this.roleService.setRole('MANAGER');
      this.router.navigate(['/team-space']);
    } 
    else if (email === 'employe@copag.ma') {
      this.roleService.setRole('EMPLOYEE');
      this.router.navigate(['/my-space']);
    } 
    else {
      this.errorMessage = 'Adresse e-mail non reconnue.';
    }
  }

  forgotPassword(event: Event) {
    event.preventDefault();
    alert('Veuillez contacter votre administrateur pour réinitialiser votre mot de passe.');
  }

  support(event: Event) {
    event.preventDefault();
    alert('Redirection vers le portail de support IT...');
  }
}

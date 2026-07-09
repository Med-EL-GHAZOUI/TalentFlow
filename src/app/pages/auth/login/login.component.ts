import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { RoleService } from '../../../core/services/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private roleService: RoleService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          const token = this.authService.getToken();
          let targetRoute = '/my-space';

          if (token) {
            try {
              const payload = JSON.parse(atob(token.split('.')[1]));
              const role = payload.role?.toUpperCase();
              
              if (role && ['ADMIN', 'RH', 'MANAGER', 'EMPLOYEE'].includes(role)) {
                this.roleService.setRole(role);
                switch(role) {
                  case 'ADMIN': targetRoute = '/dashboard'; break;
                  case 'RH': targetRoute = '/gpec-dashboard'; break;
                  case 'MANAGER': targetRoute = '/team-space'; break;
                  case 'EMPLOYEE': targetRoute = '/my-space'; break;
                }
              }
            } catch (e) {
              console.error('Failed to decode token', e);
            }
          }
          this.router.navigate([targetRoute]);
        },
        error: (err) => {
          this.errorMessage = 'Identifiants invalides';
        }
      });
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

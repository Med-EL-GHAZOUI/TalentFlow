import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export let Login = undefined;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  login(): void {
    console.log(this.credentials);
    this.router.navigate(['/dashboard']);
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

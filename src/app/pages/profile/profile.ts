import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent {

  profile = {
    firstname: 'Mohamed',
    lastname: 'EL GHAZOUI',
    email: 'mohamed@gmail.com',
    phone: '0600000000',
    role: 'ADMIN'
  };

  changePassword() {
    alert('Fonction de changement de mot de passe en cours de développement.');
  }

  editInfo() {
    alert('Fonction de modification des informations en cours de développement.');
  }
}

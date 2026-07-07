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

}

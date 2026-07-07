import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserListComponent {

  users = [

    {
      id:1,
      firstname:'Mohamed',
      lastname:'EL GHAZOUI',
      email:'mohamed@gmail.com',
      role:'ADMIN'
    },

    {
      id:2,
      firstname:'Ahmed',
      lastname:'Alaoui',
      email:'ahmed@gmail.com',
      role:'HR'
    }

  ];

}

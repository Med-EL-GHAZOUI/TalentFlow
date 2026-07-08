import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserListComponent {

  users = [
    {
      id: 1,
      firstname: 'Mohamed',
      lastname: 'EL GHAZOUI',
      email: 'mohamed@talentflow.com',
      role: 'ADMIN'
    },
    {
      id: 2,
      firstname: 'Ahmed',
      lastname: 'Alaoui',
      email: 'ahmed@talentflow.com',
      role: 'HR'
    },
    {
      id: 3,
      firstname: 'Sarah',
      lastname: 'Connor',
      email: 'sarah@talentflow.com',
      role: 'MANAGER'
    }
  ];

}

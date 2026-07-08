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

  allUsers = [
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

  users = [...this.allUsers];

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      this.allUsers = this.allUsers.filter(u => u.id !== id);
      this.users = this.users.filter(u => u.id !== id);
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.users = [...this.allUsers];
      return;
    }
    this.users = this.allUsers.filter(u => 
      u.firstname.toLowerCase().includes(searchTerm) || 
      u.lastname.toLowerCase().includes(searchTerm) ||
      u.email.toLowerCase().includes(searchTerm) ||
      u.role.toLowerCase().includes(searchTerm)
    );
  }

}

import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../core/services/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserListComponent implements OnInit {
  private userService = inject(UserService);

  allUsers: any[] = [];
  users: any[] = [];

  ngOnInit() {
    this.userService.getAll().subscribe({
      next: (res: any) => {
        this.allUsers = res;
        this.users = [...this.allUsers];
      },
      error: err => console.error(err)
    });
  }

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      this.userService.delete(id).subscribe({
        next: () => {
          this.allUsers = this.allUsers.filter(u => u.id !== id);
          this.users = this.users.filter(u => u.id !== id);
        },
        error: err => console.error(err)
      });
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.users = [...this.allUsers];
      return;
    }
    this.users = this.allUsers.filter(u => 
      (u.firstName && u.firstName.toLowerCase().includes(searchTerm)) || 
      (u.lastName && u.lastName.toLowerCase().includes(searchTerm)) ||
      (u.email && u.email.toLowerCase().includes(searchTerm)) ||
      (u.role && u.role.toLowerCase().includes(searchTerm))
    );
  }
}

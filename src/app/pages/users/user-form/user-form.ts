import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserFormComponent {

  user = {
    firstname: '',
    lastname: '',
    email: '',
    role: 'EMPLOYEE'
  };

  save(): void {
    console.log(this.user);
  }

}

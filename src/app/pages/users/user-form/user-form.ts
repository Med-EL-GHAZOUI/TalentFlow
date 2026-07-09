import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserFormComponent implements OnInit {

  isEditMode = false;

  user = {
    firstName: '',
    lastName: '',
    email: '',
    role: 'EMPLOYEE'
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        // Mock data
        this.user = {
          firstName: 'Admin',
          lastName: 'System',
          email: 'admin@copag.ma',
          role: 'ADMIN'
        };
      }
    });
  }

  save(): void {
    console.log(this.user);
    setTimeout(() => this.router.navigate(['/users']), 400);
  }

}

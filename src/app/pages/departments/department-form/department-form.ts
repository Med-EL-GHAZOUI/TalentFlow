import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './department-form.html',
  styleUrl: './department-form.scss'
})
export class DepartmentFormComponent implements OnInit {

  isEditMode = false;

  department = {
    name: '',
    description: '',
    manager: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        // Mock data loading
        this.department = {
          name: 'Domaine Mock',
          description: 'Description du domaine...',
          manager: 'Responsable'
        };
      }
    });
  }

  save() {
    console.log('Saved:', this.department);
    setTimeout(() => this.router.navigate(['/departments']), 400);
  }

}

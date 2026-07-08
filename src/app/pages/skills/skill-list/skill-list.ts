import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.scss'
})
export class SkillListComponent {

  skills = [
    {
      id:1,
      name:'Angular',
      category:'Frontend',
      level:4
    },
    {
      id:2,
      name:'Spring Boot',
      category:'Backend',
      level:5
    },
    {
      id:3,
      name:'Docker',
      category:'DevOps',
      level:3
    }
  ];

}

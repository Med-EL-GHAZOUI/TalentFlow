import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  standalone: true,
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

import { Component } from '@angular/core';

@Component({
  selector:'app-recommendations',
  standalone:true,
  templateUrl:'./recommendations.html',
  styleUrl:'./recommendations.scss'
})
export class RecommendationsComponent {

  recommendations=[

    {
      employee:'Mohamed EL GHAZOUI',
      training:'Angular Avancé',
      priority:'Haute'
    },

    {
      employee:'Ahmed Alaoui',
      training:'Spring Boot Expert',
      priority:'Moyenne'
    }

  ];

}

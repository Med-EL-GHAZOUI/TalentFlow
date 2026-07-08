import { Component } from '@angular/core';

export let CompetencyGap = undefined;


@Component({
  selector:'app-competency-gap',
  standalone:true,
  templateUrl:'./competency-gap.html',
  styleUrl:'./competency-gap.scss'
})
export class CompetencyGapComponent {

  gaps = [

    {
      employee:'Mohamed EL GHAZOUI',
      skill:'Angular',
      required:5,
      current:3
    },

    {
      employee:'Ahmed Alaoui',
      skill:'Spring Boot',
      required:4,
      current:2
    }

  ];

}

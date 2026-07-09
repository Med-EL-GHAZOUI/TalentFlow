import { Component, OnInit, inject } from '@angular/core';
import { GpecService } from '../../../core/services/gpec';
import { CommonModule } from '@angular/common';

export let Recommendations = undefined;

@Component({
  selector:'app-recommendations',
  standalone:true,
  imports: [CommonModule],
  templateUrl:'./recommendations.html',
  styleUrl:'./recommendations.scss'
})
export class RecommendationsComponent implements OnInit {
  private gpecService: any = inject(GpecService);

  recommendations: any[] = [];

  ngOnInit() {
    this.gpecService.getRecommendations().subscribe({
      next: (res: any) => this.recommendations = res,
      error: (err: any) => console.error(err)
    });
  }
}

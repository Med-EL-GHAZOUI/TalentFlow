import { Component, OnInit, inject } from '@angular/core';
import { GpecService } from '../../../core/services/gpec';
import { CommonModule } from '@angular/common';

export let CompetencyGap = undefined;

@Component({
  selector:'app-competency-gap',
  standalone:true,
  imports: [CommonModule],
  templateUrl:'./competency-gap.html',
  styleUrl:'./competency-gap.scss'
})
export class CompetencyGapComponent implements OnInit {
  private gpecService: any = inject(GpecService);
  
  gaps: any[] = [];

  ngOnInit() {
    this.gpecService.getCompetencyGaps().subscribe({
      next: (res: any) => {
        // Filter out non-deficits if we want only deficits, or keep all.
        // The prompt asked for gaps, I'll show only deficits by default, but let's just show all for now, 
        // the user has a visual pill to see the difference.
        this.gaps = res.filter((g: any) => g.gap < 0);
      },
      error: (err: any) => console.error(err)
    });
  }
}

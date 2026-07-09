import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';
import { TrainingService } from '../../../core/services/training';

@Component({
  selector: 'app-training-list',
  standalone: true,
  imports: [RouterLink, DatePipe, CommonModule],
  templateUrl: './training-list.html',
  styleUrl: './training-list.scss'
})
export class TrainingListComponent implements OnInit {
  private trainingService = inject(TrainingService);

  allTrainings: any[] = [];
  trainings: any[] = [];

  ngOnInit() {
    this.loadTrainings();
  }

  loadTrainings() {
    this.trainingService.getAll().subscribe({
      next: (res: any) => {
        // Compute pseudo progress and status if not in DB
        this.allTrainings = res.map((t: any) => ({
          ...t,
          progress: t.progress || 0,
          status: t.status || 'Planifiée',
          statusClass: 'badge-warning'
        }));
        this.trainings = [...this.allTrainings];
      },
      error: (err) => console.error(err)
    });
  }

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cette formation ?')) {
      this.trainingService.delete(id).subscribe({
        next: () => this.loadTrainings(),
        error: (err) => console.error(err)
      });
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.trainings = [...this.allTrainings];
      return;
    }
    this.trainings = this.allTrainings.filter(t => 
      t.title?.toLowerCase().includes(searchTerm) || 
      t.provider?.toLowerCase().includes(searchTerm) ||
      t.status?.toLowerCase().includes(searchTerm)
    );
  }
}

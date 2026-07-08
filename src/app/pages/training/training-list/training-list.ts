import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-training-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './training-list.html',
  styleUrl: './training-list.scss'
})
export class TrainingListComponent {

  allTrainings = [
    {
      id: 1,
      title: 'Management Agile',
      provider: 'HEC Executive',
      duration: 40,
      startDate: '2026-06-15',
      progress: 75,
      status: 'En cours',
      statusClass: 'badge-primary'
    },
    {
      id: 2,
      title: 'Sécurité au travail (HSE)',
      provider: 'COPAG Internal',
      duration: 12,
      startDate: '2026-07-01',
      progress: 100,
      status: 'Terminé',
      statusClass: 'badge-success'
    },
    {
      id: 3,
      title: 'Nouvelles normes qualité',
      provider: 'AFNOR',
      duration: 24,
      startDate: '2026-08-10',
      progress: 0,
      status: 'Planifiée',
      statusClass: 'badge-warning'
    }
  ];

  trainings = [...this.allTrainings];

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cette formation ?')) {
      this.allTrainings = this.allTrainings.filter(t => t.id !== id);
      this.trainings = this.trainings.filter(t => t.id !== id);
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.trainings = [...this.allTrainings];
      return;
    }
    this.trainings = this.allTrainings.filter(t => 
      t.title.toLowerCase().includes(searchTerm) || 
      t.provider.toLowerCase().includes(searchTerm) ||
      t.status.toLowerCase().includes(searchTerm)
    );
  }

}

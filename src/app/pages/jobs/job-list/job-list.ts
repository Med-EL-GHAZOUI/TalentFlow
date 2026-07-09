import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobService } from '../../../core/services/job';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-list.html',
  styleUrl: './job-list.scss'
})
export class JobListComponent implements OnInit {
  private jobService = inject(JobService);

  allJobs: any[] = [];
  jobs: any[] = [];

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getAll().subscribe({
      next: (data: any) => {
        this.allJobs = data;
        this.jobs = [...this.allJobs];
      },
      error: (err) => console.error('Erreur chargement emplois:', err)
    });
  }

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce poste ?')) {
      this.jobService.delete(id).subscribe({
        next: () => {
          this.allJobs = this.allJobs.filter(j => j.id !== id);
          this.jobs = this.jobs.filter(j => j.id !== id);
        },
        error: (err) => console.error('Erreur suppression:', err)
      });
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.jobs = [...this.allJobs];
      return;
    }
    this.jobs = this.allJobs.filter(j => 
      (j.title || '').toLowerCase().includes(searchTerm) || 
      (j.department?.name || '').toLowerCase().includes(searchTerm)
    );
  }
}

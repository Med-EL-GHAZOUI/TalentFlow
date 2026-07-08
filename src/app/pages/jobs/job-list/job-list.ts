import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-list.html',
  styleUrl: './job-list.scss'
})
export class JobListComponent {

  allJobs = [
    {
      id: 1,
      title: 'Développeur Full Stack',
      department: 'Informatique (IT)'
    },
    {
      id: 2,
      title: 'Responsable RH',
      department: 'Ressources Humaines'
    }
  ];

  jobs = [...this.allJobs];

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce poste ?')) {
      this.allJobs = this.allJobs.filter(j => j.id !== id);
      this.jobs = this.jobs.filter(j => j.id !== id);
    }
  }

  filter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.jobs = [...this.allJobs];
      return;
    }
    this.jobs = this.allJobs.filter(j => 
      j.title.toLowerCase().includes(searchTerm) || 
      j.department.toLowerCase().includes(searchTerm)
    );
  }

}

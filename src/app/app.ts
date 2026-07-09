import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  backendMessage = '';

  constructor(private themeService: ThemeService, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/', { responseType: 'text' }).subscribe({
      next: (response) => {
        this.backendMessage = response;
        console.log('Connexion au backend réussie : ', response);
      },
      error: (error) => {
        console.error('Erreur de connexion au backend : ', error);
      }
    });
  }
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {

  username = 'Mohamed EL GHAZOUI';

  constructor(private router: Router) {}

  showNotifications() {
    alert('Vous avez 3 nouvelles notifications !');
  }

  logout() {
    this.router.navigate(['/login']);
  }
}

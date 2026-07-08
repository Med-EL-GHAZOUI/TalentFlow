import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent} from './shared/components/sidebar/sidebar';
import {NavbarComponent} from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

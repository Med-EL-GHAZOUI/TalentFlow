import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class SettingsComponent {

  settings = {

    darkMode: false,

    notifications: true,

    language: 'Français'

  };

  save(): void {

    console.log(this.settings);

  }

}

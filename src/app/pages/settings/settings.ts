import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class SettingsComponent {

  activeTab = 'apparence';

  settings = {
    darkMode: false,
    notifications: true,
    language: 'Français',
    animations: true,
    density: false
  };

  originalSettings = { ...this.settings };
  isSaving = false;
  showSuccess = false;

  setTab(tab: string) {
    this.activeTab = tab;
  }

  save(): void {
    this.isSaving = true;
    this.showSuccess = false;
    setTimeout(() => {
      this.isSaving = false;
      this.showSuccess = true;
      this.originalSettings = { ...this.settings };
      setTimeout(() => this.showSuccess = false, 3000);
    }, 800);
  }

  cancel(): void {
    this.settings = { ...this.originalSettings };
    this.showSuccess = false;
  }
}

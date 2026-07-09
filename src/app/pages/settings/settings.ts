import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class SettingsComponent implements OnInit {

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

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    const theme = this.themeService.getSettings();
    this.settings = { ...this.settings, ...theme };
    this.originalSettings = { ...this.settings };
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  save(): void {
    this.isSaving = true;
    this.showSuccess = false;
    
    // Appliquer les paramètres globalement
    this.themeService.updateSettings({
      darkMode: this.settings.darkMode,
      animations: this.settings.animations,
      density: this.settings.density
    });

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

import { Injectable } from '@angular/core';

export interface ThemeSettings {
  darkMode: boolean;
  animations: boolean;
  density: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'copag_theme_settings';
  
  private currentSettings: ThemeSettings = {
    darkMode: false,
    animations: true,
    density: false
  };

  constructor() {
    this.loadSettings();
  }

  getSettings(): ThemeSettings {
    return { ...this.currentSettings };
  }

  updateSettings(settings: Partial<ThemeSettings>) {
    this.currentSettings = { ...this.currentSettings, ...settings };
    this.saveSettings();
    this.applyTheme();
  }

  private loadSettings() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.currentSettings = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load theme settings', e);
    }
    this.applyTheme();
  }

  private saveSettings() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.currentSettings));
    } catch (e) {
      console.error('Failed to save theme settings', e);
    }
  }

  private applyTheme() {
    const root = document.documentElement;
    
    // Dark Mode
    if (this.currentSettings.darkMode) {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }

    // Animations
    if (this.currentSettings.animations) {
      root.classList.remove('disable-animations');
    } else {
      root.classList.add('disable-animations');
    }

    // Density
    if (this.currentSettings.density) {
      root.classList.add('compact-density');
    } else {
      root.classList.remove('compact-density');
    }
  }
}

import { Injectable } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  current: Theme = 'light';

  constructor() {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('shelfflow-theme');
      this.current = savedTheme === 'dark' ? 'dark' : 'light';
    }
    this.applyTheme();
  }

  toggle(): void {
    this.current = this.current === 'light' ? 'dark' : 'light';
    this.applyTheme();
  }

  private applyTheme(): void {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark-mode', this.current === 'dark');
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('shelfflow-theme', this.current);
    }
  }
}

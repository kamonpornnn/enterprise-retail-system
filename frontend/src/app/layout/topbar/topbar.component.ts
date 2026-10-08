import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import Swal from 'sweetalert2';
import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  constructor(
    public readonly languageService: LanguageService,
    public readonly themeService: ThemeService,
    private readonly elementRef: ElementRef<HTMLElement>,
  ) {}

  @Input() brandName = 'ShelfFlow';
  @Output() searchClick = new EventEmitter<void>();
  @Output() notificationClick = new EventEmitter<void>();

  isProfileMenuOpen = false;

  toggleLanguage(): void {
    this.languageService.toggle();
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  openUserAccount(): void {
    this.isProfileMenuOpen = false;
    void Swal.fire({
      icon: 'info',
      title: this.languageService.t('alert.accountTitle'),
      text: this.languageService.t('alert.accountText'),
      confirmButtonText: this.languageService.t('alert.confirm'),
      confirmButtonColor: '#0f8f88',
    });
  }

  openSettings(): void {
    this.isProfileMenuOpen = false;
    void Swal.fire({
      icon: 'info',
      title: this.languageService.t('alert.settingsTitle'),
      text: this.languageService.t('alert.settingsText'),
      confirmButtonText: this.languageService.t('alert.confirm'),
      confirmButtonColor: '#0f8f88',
    });
  }

  logout(): void {
    this.isProfileMenuOpen = false;
    void Swal.fire({
      icon: 'question',
      title: this.languageService.t('alert.logoutTitle'),
      text: this.languageService.t('alert.logoutText'),
      showCancelButton: true,
      confirmButtonText: this.languageService.t('topbar.logout'),
      cancelButtonText: this.languageService.t('alert.cancel'),
      confirmButtonColor: '#c64747',
      cancelButtonColor: '#71808d',
    });
  }

  @HostListener('document:click', ['$event'])
  closeProfileMenu(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.isProfileMenuOpen = false;
    }
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService, TranslationKey } from '../../core/services/language.service';

interface NavigationItem {
  code: string;
  path: string;
  labelKey: TranslationKey;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(
    public readonly languageService: LanguageService,
    public readonly router: Router,
  ) {}

  @Input() brandName = 'ShelfFlow';
  @Input() collapsed = false;
  @Output() itemSelected = new EventEmitter<NavigationItem>();
  @Output() toggle = new EventEmitter<void>();

  readonly navigationItems: NavigationItem[] = [
    { code: 'SCR-DASH-001', path: '/dashboard', labelKey: 'navigation.dashboard', icon: '▦' },
    { code: 'SCR-USER-001', path: '/users', labelKey: 'navigation.users', icon: '♙' },
    { code: 'SCR-PROD-001', path: '/products', labelKey: 'navigation.products', icon: '□' },
    { code: 'SCR-INV-001', path: '/inventory', labelKey: 'navigation.inventory', icon: '▤' },
    { code: 'SCR-SALE-001', path: '/sales', labelKey: 'navigation.sales', icon: '↗' },
  ];

  navigate(item: NavigationItem): void {
    this.itemSelected.emit(item);
    void this.router.navigate([item.path]);
  }
}

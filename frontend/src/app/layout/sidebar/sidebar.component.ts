import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguageService, TranslationKey } from '../../core/services/language.service';

interface NavigationItem {
  code: string;
  labelKey: TranslationKey;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public readonly languageService: LanguageService) {}

  @Input() brandName = 'ShelfFlow';
  @Input() collapsed = false;
  @Output() itemSelected = new EventEmitter<NavigationItem>();
  @Output() toggle = new EventEmitter<void>();

  readonly navigationItems: NavigationItem[] = [
    { code: 'SCR-DASH-001', labelKey: 'navigation.dashboard', icon: '▦' },
    { code: 'SCR-USER-001', labelKey: 'navigation.users', icon: '♙' },
    { code: 'SCR-PROD-001', labelKey: 'navigation.products', icon: '□' },
    { code: 'SCR-INV-001', labelKey: 'navigation.inventory', icon: '▤' },
    { code: 'SCR-SALE-001', labelKey: 'navigation.sales', icon: '↗' },
  ];
}

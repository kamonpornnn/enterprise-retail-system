import { Component } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public readonly languageService: LanguageService) {}

  readonly year = new Date().getFullYear();
}

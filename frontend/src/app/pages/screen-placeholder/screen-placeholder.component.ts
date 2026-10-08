import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService, TranslationKey } from '../../core/services/language.service';

@Component({
  selector: 'app-screen-placeholder',
  templateUrl: './screen-placeholder.component.html',
  styleUrls: ['./screen-placeholder.component.scss'],
})
export class ScreenPlaceholderComponent {
  readonly screenCode: string;
  readonly title?: string;
  readonly labelKey?: TranslationKey;

  constructor(
    private readonly route: ActivatedRoute,
    public readonly languageService: LanguageService,
  ) {
    this.screenCode = this.route.snapshot.data['screenCode'];
    this.title = this.route.snapshot.data['title'];
    this.labelKey = this.route.snapshot.data['labelKey'];
  }

  get screenTitle(): string {
    return this.labelKey ? this.languageService.t(this.labelKey) : this.title || this.screenCode;
  }
}

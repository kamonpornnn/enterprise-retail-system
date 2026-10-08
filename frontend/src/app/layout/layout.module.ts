import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppShellComponent } from './app-shell/app-shell.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppShellComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [AppShellComponent],
})
export class LayoutModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LoadingStateComponent } from './components/loading-state/loading-state.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    StatusBadgeComponent,
    LoadingStateComponent,
    EmptyStateComponent,
  ],
    imports: [CommonModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatToolbarModule],
    exports: [PageHeaderComponent, StatusBadgeComponent, LoadingStateComponent, EmptyStateComponent, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatToolbarModule],
})
export class SharedModule {}

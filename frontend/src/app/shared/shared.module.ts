import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
  imports: [CommonModule],
  exports: [PageHeaderComponent, StatusBadgeComponent, LoadingStateComponent, EmptyStateComponent],
})
export class SharedModule {}

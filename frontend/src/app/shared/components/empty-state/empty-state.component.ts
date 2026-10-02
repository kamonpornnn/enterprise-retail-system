import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: false,
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent {
  @Input() title = 'ไม่พบข้อมูล';
  @Input() description = 'ยังไม่มีข้อมูลที่จะแสดงในขณะนี้';
  @Input() actionLabel = '';
  @Output() actionClick = new EventEmitter<void>();
}

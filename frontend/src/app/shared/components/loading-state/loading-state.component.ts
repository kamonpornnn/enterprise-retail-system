import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-state',
  standalone: false,
  templateUrl: './loading-state.component.html',
  styleUrls: ['./loading-state.component.scss'],
})
export class LoadingStateComponent {
  @Input() label = 'กำลังโหลดข้อมูล...';
}

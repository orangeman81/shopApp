import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-view',
  templateUrl: './nav-view.component.html',
  styleUrls: ['./nav-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavViewComponent {
  @Input() shop;
  @Output() logout = new EventEmitter;

  constructor() { }

}

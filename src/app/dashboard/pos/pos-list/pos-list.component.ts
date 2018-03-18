import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pos-list',
  templateUrl: './pos-list.component.html',
  styleUrls: ['./pos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosListComponent {
  @Input() posList: Array<any>;
  @Input() shopData;
  @Output() delete = new EventEmitter();

  constructor() { }

}

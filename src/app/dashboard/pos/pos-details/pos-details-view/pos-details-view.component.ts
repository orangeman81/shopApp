import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pos-details-view',
  templateUrl: './pos-details-view.component.html',
  styleUrls: ['./pos-details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosDetailsViewComponent {
  @Input() posDetails;
  @Input() shopData;

  constructor() { }

}

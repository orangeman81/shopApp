import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  
  @Input() error;
  @Input() errorText;
  @Input() infoCard;
  @Input() cardCode;
  @Input() purchase;
  @Input() operationResponse;
  @Input() operationSummary;
  
  constructor() { }

}

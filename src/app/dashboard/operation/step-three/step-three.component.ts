import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent {
  
  @Input() error;
  @Input() errorText;
  @Input() infoCard;
  @Input() cardCode;
  @Input() purchase;
  @Input() pinParzialeData;
  @Input() operationResponse;
  @Output() parseValue = new EventEmitter();
  @Output() formThree = new EventEmitter();
  @Output() back = new EventEmitter();

  constructor() { }

}

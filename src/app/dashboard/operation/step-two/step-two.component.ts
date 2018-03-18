import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {
  @Input() error;
  @Input() errorText;
  @Input() infoCard;
  @Input() cardCode;
  @Input() transactions;
  @Input() category;
  @Input() transactionsLength;
  @Output() formTwo = new EventEmitter();
  @Output() back = new EventEmitter();

  public purchaseVal: boolean = true;

  constructor() { }

  validateWkfromCard(total: number, wk: number) {
    let minVal: number = this.infoCard.saldo;
    if (Number(total) < minVal) {
      minVal = Number(total);
    }
    let wkeyusati = Number(wk);
    this.purchaseVal = (wkeyusati >= 0 && wkeyusati <= minVal);
  }

}

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PosVO } from './../../../../model/PosVO';

@Component({
  selector: 'app-pos-form',
  templateUrl: './pos-form.component.html',
  styleUrls: ['./pos-form.component.scss']
})
export class PosFormComponent {
  passVal: boolean = true;
  newPos: PosVO = {};
  repeat;
  @Input() error;
  @Input() errorText;
  @Output() newPosForm = new EventEmitter();
  
  constructor() { }

  passwordValidator($event) {
    if (this.newPos.password === $event) {
      this.passVal = true;
      this.error = false;
    }else{
      this.passVal = false;
      this.error = true;
    }
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {

  @Input() error;
  @Input() errorText;
  @Output() formOne = new EventEmitter();

  constructor() { }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pos-details-form',
  templateUrl: './pos-details-form.component.html'
})
export class PosDetailsFormComponent {
  @Output() updatePos = new EventEmitter;
  @Input() posDetails;
  constructor() { }
}

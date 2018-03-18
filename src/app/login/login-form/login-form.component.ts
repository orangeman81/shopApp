import { Component, Output, ChangeDetectionStrategy, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  @Input() error;
  @Input() errorText;
  @Output() credentials = new EventEmitter();

  constructor() { }

}

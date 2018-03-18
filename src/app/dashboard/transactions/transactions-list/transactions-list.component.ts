import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
})
export class TransactionsListComponent {
  @Input() transactions;
  @Output() findClient = new EventEmitter();

  constructor() { }

}

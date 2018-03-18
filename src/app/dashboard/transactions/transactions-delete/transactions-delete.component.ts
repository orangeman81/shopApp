import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { PosService } from './../../../services/pos.service';
import { MaterializeAction } from 'angular2-materialize';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-transactions-delete',
  templateUrl: './transactions-delete.component.html',
  styleUrls: ['./transactions-delete.component.scss']
})
export class TransactionsDeleteComponent implements OnInit {
  @Input() transaction;
  @Output() remove = new EventEmitter<void>();
  public clock = Observable.interval(1000).map(() => new Date().getTime());
  public clockSub: ISubscription;
  public canDelete: boolean;
  public modalActions = new EventEmitter<string | MaterializeAction>();

  constructor(private pos: PosService) { }

  ngOnInit() {
    this.canDelete = false;
    let date = new Date(this.transaction.data_completamento).getTime();
    let dateNow: number = new Date().getTime();
    let actualDate = date - dateNow;
    if (actualDate < -61000 || isNaN(actualDate) || this.transaction.stato == "annullata") {
      return null;
    } else {
      this.clockSub = this.clock
        .take(60)
        .subscribe(data => {
          let calc = Math.abs(date - data);
          if (calc < 60000) {
            this.canDelete = true;
          } else {
            this.canDelete = false;
          }
        });
    }
  }

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  delete(id) {
    this.pos.deleteTransaction(id)
      .subscribe(
      () => { },
      () => { },
      () => {
        this.remove.emit();
        this.canDelete = false;
        this.clockSub.unsubscribe();
      }
      );
  }

}

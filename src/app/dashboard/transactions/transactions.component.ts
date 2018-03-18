import { Component, OnInit, OnDestroy } from '@angular/core';
import { PosService } from './../../services/pos.service';
import { TransazioneVO } from './../../model/TransazioneVO';
import { ISubscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {
  public transactions: Array<TransazioneVO>;
  public querySubject = new BehaviorSubject<string>("");
  public clientSubject = new BehaviorSubject<string>(null);
  private transactionsSub: ISubscription;
  public length: number;

  constructor(public pos: PosService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.loadContent(20);
  }

  loadContent(event) {

    const searchTerm = this.querySubject
      .debounceTime(600)
      .distinctUntilChanged()
      .map(query => {
        return query
      })

    this.transactionsSub = searchTerm
      .switchMap(query => this.pos.getTransactions(event, query, null))
      .subscribe(data => {
        this.transactions = data;
        this.length = data.length;
      })
  }

  search(query) {
    this.querySubject.next(query);
  }

  searchByClient(id) {
    this.transactionsSub = this.pos.getTransactions(20, null, id)
      .subscribe(data => {
        this.transactions = data;
        this.length = data.length;
      })
  }

  ngOnDestroy() {
    this.transactionsSub.unsubscribe();
  }

}
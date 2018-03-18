import { Injectable } from '@angular/core';
import { NegozioApi } from '../api/NegozioApi';
import { Router } from '@angular/router';
import { PosVO } from './../model/PosVO';
import { TransazioneVO } from './../model/TransazioneVO';
import { Observable } from 'rxjs';


@Injectable()
export class PosService {

  public shopData;

  constructor(
    private shop: NegozioApi,
    private router: Router
  ) { }

  getShop(): Observable<PosVO[]> {
    return this.shop.findNegozi();
  }

  getPos(): Observable<PosVO[]> {
    return this.shop.findPos();
  }

  getPosById(id: number): Observable<PosVO> {
    return this.shop.getPostById(id);
  }

  addPos(pos): Observable<PosVO> {
    return this.shop.creaPos(pos)
      .first()
      .do(() => this.router.navigateByUrl('/posweb/pos'))
  }

  updatePos(event): Observable<PosVO> {
    return this.shop.aggiornaPos(event.id, event.pos)
      .first()
      .do(() => this.router.navigateByUrl('/posweb/pos'))
  }

  deletePos(id): Observable<PosVO> {
    return this.shop.disattivaPos(id)
      .first()
      .do(() => this.router.navigateByUrl('/posweb/pos'))
  }

  getTransactions(size, query, id): Observable<TransazioneVO[]> {
    return this.shop.findTransazioni(0, size, null, null, query, id)
      .first();
  }

  deleteTransaction(id: number) {
    return this.shop.annullaOperazione(id)
      .first()
  }

}
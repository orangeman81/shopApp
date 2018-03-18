import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { PosService } from './../../services/pos.service';
import { Observable } from 'rxjs/Observable';
import { PosVO } from './../../model/PosVO';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  public shop: Observable<PosVO>;

  constructor(public auth: AuthService, public pos: PosService) { }

  ngOnInit() {
    this.shop = this.pos.getShop()
      .map(data => data[0]);
    this.pos.shopData = this.shop;
  }

}

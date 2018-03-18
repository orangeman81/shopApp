import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PosService } from './../../services/pos.service';
import { PosVO } from './../../model/PosVO';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  public posList: Observable<PosVO[]>;
  constructor(public pos: PosService) { }

  ngOnInit() {
    this.posList = this.pos.getPos();
    window.scrollTo(0, 0);
  }
  
  // delete($event) {
  //   this.pos.deletePos($event)
  //     .subscribe();
  // }

}

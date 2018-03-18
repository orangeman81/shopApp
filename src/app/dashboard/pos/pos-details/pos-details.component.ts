import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PosService } from './../../../services/pos.service';
import { ISubscription } from "rxjs/Subscription";
import { PosVO } from './../../../model/PosVO';

@Component({
  selector: 'app-pos-details',
  templateUrl: './pos-details.component.html'
})
export class PosDetailsComponent implements OnInit, OnDestroy {
  public formView: boolean;
  public icon: string = "update";
  public posDetails: PosVO;
  private posDetailsSub: ISubscription;

  constructor(private route: ActivatedRoute, public pos: PosService) { }

  ngOnInit() {
    this.posDetailsSub = this.route.params
      .switchMap(params => this.pos.getPosById(params['id']))
      .subscribe(pos => {
        this.posDetails = pos;
      });
    this.formView = false;
  }

  ngOnDestroy() {
    this.posDetailsSub.unsubscribe();
  }

  toggleForm() {
    if(this.formView != false) {
      this.formView = false;
      this.icon = "update";
    }else{
      this.formView = true;
      this.icon = "info";
    }
  }
}

import { Component } from '@angular/core';
import { PosService } from './../../../services/pos.service';

@Component({
  selector: 'app-add-pos',
  templateUrl: './add-pos.component.html',
  styleUrls: ['./add-pos.component.scss']
})
export class AddPosComponent {

  error: boolean;
  errorText: string;
  
  constructor(public pos: PosService) { }

  onSubmit($event) {
    console.log($event);
    this.pos.addPos($event)
      .subscribe(() =>
        err => {
          let obj = JSON.parse(err._body);
          this.error = true;
          this.errorText = obj.messaggio_errore;
        }
      )
  }

}

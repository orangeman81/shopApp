import { ISubscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { InfoCardVO } from './../../model/InfoCardVO';
import { PosApi } from './../../api/PosApi';
import { RichiestaOperazioneVO } from './../../model/RichiestaOperazioneVO';
import { RispostaOperazioneVO } from './../../model/RispostaOperazioneVO';
import { ConfermaOperazioneVO } from './../../model/ConfermaOperazioneVO';
import { TransazioneVO } from './../../model/TransazioneVO';
import { CashbackNegozioCategoriaVO } from './../../model/CashbackNegozioCategoriaVO';
import { WisionApi } from './../../api/WisionApi';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  private transactionsSub: ISubscription;
  public transactions: Array<TransazioneVO>;
  public category: Observable<CashbackNegozioCategoriaVO[]>;
  public transactionsLength: number;
  // steps
  public stepOne: boolean = true;
  public stepTwo: boolean = false;
  public stepThree: boolean = false;
  // pin
  public pinParzialeData: Array<any> = [];
  // errors
  public errorText: string;
  public error: boolean = false;
  // summary
  public summary: boolean = false;
  public infoCard: InfoCardVO;
  public purchase: Array<any>;
  public cardCode: string;
  public operationResponse: RispostaOperazioneVO;
  public operationSummary: string = "Operazione non Riuscita";

  constructor(private pos: PosApi, private wision: WisionApi) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  firstStep(code) {
    this.error = false;
    this.cardCode = code.code;
    this.category = this.wision.findCashbackNegozioCategoria();
    this.pos.getInfoCartaByCodice(code.code)
      .first()
      .subscribe(data => {
        this.stepOne = false;
        this.stepTwo = true;
        this.infoCard = data;
      },
      err => {
        let obj = JSON.parse(err._body);
        this.error = true;
        this.errorText = obj.messaggio_errore;
      },
      () => {
        this.transactionsSub = this.pos.findTransazioni(0, 3, null, null, null, this.infoCard.cliente_id)
          .subscribe(data => {
            this.transactions = data;
            this.transactionsLength = data.length;
          });
      }
      );
  }

  secondStep(purchase) {
    this.transactionsSub.unsubscribe();
    this.error = false;
    this.stepOne = false;
    if (purchase.categoria_value == "") {
      purchase.categoria_value = null;
    }
    this.purchase = purchase;
    this.pos.creaOperazione({
      codice_card: this.cardCode,
      prelievo_carta: purchase.utilizzo_wk,
      totale_operazione: purchase.total,
      descrizione: purchase.description,
      categoria_id: purchase.categoria_value
    })
      .first()
      .subscribe(data => {
        this.stepTwo = false;
        this.stepThree = true;
        this.operationResponse = data;
        if (data.meccanismo_protezione == RispostaOperazioneVO.MeccanismoProtezioneEnum.PinParziale) {
          var max = Math.max.apply(Math, data.cifre_pin_parziale);
          if (4 > max) {
            max = 4;
          }
          for (var i = 0; i < max + 1; i++) {
            this.pinParzialeData[i] = data.cifre_pin_parziale.indexOf(i) >= 0;
          }
        }
      },
      err => {
        let obj = JSON.parse(err._body);
        this.error = true;
        this.errorText = obj.messaggio_errore;
      },
      () => { console.log("Observable Completed") }
      );
  }

  parseValue(pin) {
    let parsedPin: string = "";
    let pins = Object.keys(pin);
    for (var i = 0; i < pins.length; i++) {
      parsedPin += pin[pins[i]];
    }
    let pinVal: ConfermaOperazioneVO = { codice_protezione: parsedPin };
    this.pos.confermaOperazione(this.operationResponse.codice_operazione, pinVal)
      .first()
      .subscribe(data => {
        console.log(data)
      }
      , err => {
        let obj = JSON.parse(err._body);
        this.error = true;
        this.errorText = obj.messaggio_errore;
      }
      , () => { console.log("Obsevable stopped") }
      );
  }

  back() {
    this.error = false;
    this.stepOne = false;
    this.stepTwo = true;
    this.stepThree = false;
  }

  thirdStep(pin: string) {
    this.error = false;
    this.stepOne = false;
    this.stepTwo = false;
    let pinVal: ConfermaOperazioneVO = { codice_protezione: pin }
    this.pos.confermaOperazione(this.operationResponse.codice_operazione, pinVal)
      .first()
      .subscribe(data => {
        this.operationSummary = "Operazione Riuscita con successo!";
        this.stepThree = false;
        this.summary = true;
      },
      err => {
        let obj = JSON.parse(err._body);
        this.error = true;
        this.errorText = obj.messaggio_errore;
      },
      () => console.log("Obsevable stopped")
      );
  }

  reset() {
    this.stepOne = true;
    this.stepTwo = false;
    this.stepThree = false;
    // pin
    this.pinParzialeData = [];
    // errors
    this.errorText = "";
    this.error = false;
    // summary
    this.summary = false;
    this.infoCard = {};
    this.purchase = [];
    this.cardCode = "";
    this.operationResponse = {};
    this.operationSummary = "Operazione non Riuscita";
    window.scrollTo(0, 0);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
// qrCode
import { QRCodeModule } from 'angular2-qrcode';
// components
import { DashboardComponent } from './dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsListComponent } from './transactions/transactions-list/transactions-list.component';
import { PosListComponent } from './pos/pos-list/pos-list.component';
import { PosDetailsComponent } from './pos/pos-details/pos-details.component';
import { PosDetailsViewComponent } from './pos/pos-details/pos-details-view/pos-details-view.component';
import { PosComponent } from './pos/pos.component';
import { AddPosComponent } from './pos/add-pos/add-pos.component';
import { PosFormComponent } from './pos/add-pos/pos-form/pos-form.component';
import { PosDetailsFormComponent } from './pos/pos-details/pos-details-form/pos-details-form.component';
import { TransactionsDeleteComponent } from './transactions/transactions-delete/transactions-delete.component';
import { OperationComponent } from './operation/operation.component';
import { StepOneComponent } from './operation/step-one/step-one.component';
import { StepTwoComponent } from './operation/step-two/step-two.component';
import { StepThreeComponent } from './operation/step-three/step-three.component';
import { SummaryComponent } from './operation/summary/summary.component';

@NgModule({
  imports: [
    CommonModule,
    QRCodeModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, TransactionsComponent, TransactionsListComponent, PosListComponent, PosDetailsComponent, PosDetailsViewComponent, PosComponent, AddPosComponent, PosFormComponent, PosDetailsFormComponent, TransactionsDeleteComponent, OperationComponent, StepOneComponent, StepTwoComponent, StepThreeComponent, SummaryComponent]
})
export class DashboardModule { }

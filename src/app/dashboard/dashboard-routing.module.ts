import { OperationComponent } from './operation/operation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../services/auth-guard.service';

import { DashboardComponent } from './dashboard.component';
import { PosComponent } from './pos/pos.component';
import { AddPosComponent } from './pos/add-pos/add-pos.component';
import { PosDetailsComponent } from './pos/pos-details/pos-details.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'addPos',
        component: AddPosComponent
      },
      {
        path: 'pos/:id',
        component: PosDetailsComponent
      },
      {
        path: 'operation',
        component: OperationComponent
      },
      {
        path: 'pos',
        component: PosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

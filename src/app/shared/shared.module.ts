import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MaterializeModule } from "angular2-materialize";
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NavViewComponent } from './nav/nav-view/nav-view.component';
import { FocusModule } from 'angular2-focus';
import { EuroPipe } from './pipes/euro.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { WkPipe } from './pipes/wk.pipe';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterializeModule
  ],
  declarations: [FooterComponent, NavComponent, NavViewComponent, EuroPipe, PaginationComponent, WkPipe, SearchComponent],
  exports: [
    FormsModule,
    MaterializeModule,
    NavComponent,
    EuroPipe,
    WkPipe,
    PaginationComponent,
    FocusModule,
    SearchComponent,
    FooterComponent
  ]
})
export class SharedModule { }

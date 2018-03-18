import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from "@angular/http";
// services
import { AuthService } from "./services/auth.service";
import { AuthGuard } from './services/auth-guard.service';
import { PosService } from './services/pos.service';
import { APIS } from './api/api';
// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule
  ],
  providers: [AuthService, AuthGuard, PosService, APIS],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public error: boolean = false;
  public errorText: string;

  constructor(public auth: AuthService, private router: Router) { }

  signUp(form) {
    this.auth.login(form)
      .first()
      .subscribe(data => {
        console.log(data);
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl('/posweb/transactions');
      },
      err => {
        console.log(err);
        this.error = true;
        this.errorText = err.messaggio_errore;
        console.log(this.errorText);
      });
  }

}

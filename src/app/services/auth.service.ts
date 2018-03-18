import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(credentials) {
    const body = JSON.stringify(credentials);
    console.log(body);
    return this.http.post('https://wision55.mywatson.it/api/auth', body)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
    // return this.shop.autorizza(credentials);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

}

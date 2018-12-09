import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoginResponse } from '../objects/loginResponse';
import { RegisterUser } from '../objects/registerUser';
import { LoginUser } from '../objects/loginUser';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token: string;
  url = 'http://shielded-hollows-19820.herokuapp.com/';
  userStatus = false;

  constructor(private http: HttpClient, private router: Router) {}

  isLogedIn() {
    if ( localStorage.getItem('token') != null ) this.userStatus = true;
    else this.userStatus = false;
    return this.userStatus;
  }

  register(user: RegisterUser) {
     return this.http.post(this.url + 'signup', user);
  }

  private logUser(resp: LoginResponse) {
    this.userStatus = true;
    localStorage.setItem('token', resp.token);
    localStorage.setItem('username', resp.username);
   // localStorage.setItem('userType', resp.userType);
    return resp;
  }

  login(user: LoginUser) {
   return this.http.post<LoginResponse>(this.url + 'login', user)
      .map(resp => this.logUser(resp));
  }

  logout() {
    if (this.isLogedIn) {
      localStorage.clear();
      this.token = null;
      this.userStatus = false;
      this.router.navigate(['/']);
    }
  }

}

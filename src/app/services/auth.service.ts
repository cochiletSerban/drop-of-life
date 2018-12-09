import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../objects/User';
import 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoginResponse } from '../objects/loginResponse';

@Injectable()
export class AuthService {

  token: string;
  url = 'http://shielded-hollows-19820.herokuapp.com/';
  userStatus = false;

  constructor(private http:HttpClient) {}

  isLogedIn() {
    return this.userStatus;
  }

  register(user:User){
   return this.http.post(this.url + 'signup', user);
  }

  private logUser(token){
    this.userStatus = true;
    this.token = token;
    return this.userStatus;
  }

  login(user:User) {
    return this.http.post<LoginResponse>(this.url + 'login', {username:user.username, password:user.password})
      .map(resp => this.logUser(resp.token))
  }

  logout(){
    if(this.isLogedIn) {
      this.token = null;
      this.userStatus = false;
    }
  }

}

import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  private url = 'http://localhost:3000';
  
  login(usuario){
    return this._http.post<any>(this.url + '/login', usuario);
  }

  loggedIn(){
    console.log(!!localStorage.getItem('token'))
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }

}

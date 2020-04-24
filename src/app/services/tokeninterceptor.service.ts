import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { LoginService } from './login.service'

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {
  constructor(private _login: LoginService) { }

  intercept(req, next){
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._login.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }
}

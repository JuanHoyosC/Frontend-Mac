import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  constructor(private _login: LoginService, private router: Router) { }
  
  canActivate(): boolean {
    if (!this._login.loggedIn()) return true
    this.router.navigate(['/registro']);
  }

  
}

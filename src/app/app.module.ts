import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './auth.guard';
import { LoginAuthGuard } from './login-auth.guard';

import {TokeninterceptorService} from './services/tokeninterceptor.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { OficinaVirtualComponent } from './components/oficina-virtual/oficina-virtual.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    OficinaVirtualComponent,
    MenuVerticalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, LoginAuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokeninterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

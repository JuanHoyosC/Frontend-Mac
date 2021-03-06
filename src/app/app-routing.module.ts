import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { OficinaVirtualComponent } from './components/oficina-virtual/oficina-virtual.component';

import { AuthGuard } from './auth.guard';
import { LoginAuthGuard } from './login-auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [LoginAuthGuard]},
  {path: 'registro', component: RegistroComponent, canActivate: [AuthGuard]},
  {path: 'oficina-virtual', component: OficinaVirtualComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

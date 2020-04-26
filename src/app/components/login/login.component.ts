import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alerta: String = ""
  mostrarAlerta: boolean = false

  usuario = {
    correo: '',
    clave: ''
  }

  constructor(private _login: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }


  login() {
    if (this.usuario.correo != "" && this.usuario.clave != "") {
      this._login.login(this.usuario).subscribe(res => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/registro']);
      },
        err => {this.mensaje(err.error.status)}
      )
    } else {
      this.mensaje("No debe dejar campos vacios")
    }
  }

  mensaje(mensaje: String): void {
    this.alerta = mensaje;
    this.mostrarAlerta = true;
  }

}

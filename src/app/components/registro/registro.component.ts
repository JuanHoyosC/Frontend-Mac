import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css', '../login/login.component.css']
})
export class RegistroComponent implements OnInit {

  alerta: String = ""
  mostrarAlerta: boolean = false

  usuario = {
    nombre: '',
    clave: '',
    confirmarClave: '',
    correo: '',
    confirmarCorreo: '',
    telefono: 0,
    iD: 0
  }

  constructor(private _registro: RegistroService, private _router: Router) { }

  ngOnInit(): void {
  }

  registrar(): void {
    if (this.usuario.correo == this.usuario.confirmarCorreo) {
      if (this.usuario.confirmarClave == this.usuario.clave) {
        if (this.usuario.clave.length != 0 && this.usuario.confirmarClave.length != 0 && this.usuario.nombre.length != 0 && this.usuario.iD > 0  && this.usuario.telefono > 0 &&
          this.usuario.correo.length != 0 && this.usuario.confirmarCorreo.length != 0){

          this._registro.registrar(this.usuario).subscribe(res => { console.log(res.status) },
            err => { this.mensaje(err.error.status); }
          )

        } else {
          this.mensaje('No debe dejar los campos vacios');
        }
      } else {
        this.mensaje('Las claves deben ser iguales');
      }
    } else {
      this.mensaje('Los correos deben ser iguales');
    }
  }

  mensaje(mensaje: String): void {
    this.alerta = mensaje;
    this.mostrarAlerta = true;
  }

}

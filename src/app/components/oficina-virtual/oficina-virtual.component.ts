import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-oficina-virtual',
  templateUrl: './oficina-virtual.component.html',
  styleUrls: ['./oficina-virtual.component.css']
})
export class OficinaVirtualComponent implements OnInit {

  usuarios: String = '';
  registrar: boolean = false;
  alerta: String = ""
  mostrarAlerta: boolean = false
  correos = [];

  constructor(private _registro: RegistroService) { }

  ngOnInit(): void {
  }

  agregarCorreos() {
    if (this.usuarios.length == 0) return console.log("No debe dejar el campo vacio")
    this.correos = this.usuarios.split(',');
    this.registrar = true
  }

  eliminarCorreo(pos: number) {
    this.correos.splice(pos, 1);
    if (this.correos.length == 0) this.registrar = false; this.mostrarAlerta = false
  }

  registrarCorreos() {
    for (let i = 0; i < this.correos.length; i++) {
      this._registro.registrarNuevo(this.correos[i], 'd').subscribe(res => {console.log(res.status)},
        err => {this.mostrarAlerta = true;  this.alerta = err.error.status;})
    }
  }

}

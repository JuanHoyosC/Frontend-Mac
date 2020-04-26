import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../interfaces/usuario.interface'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private _http: HttpClient) { }

  private url = 'http://localhost:3000';

  registrar(usuario: Usuario) {
    return this._http.post<any>(this.url + '/registro', usuario);
  }

  registrarNuevo(correo: String, clave: String) {
    const usuario = { correo: correo, clave: clave }
    return this._http.post<any>(this.url + '/registro/nuevo', usuario);
  }

}

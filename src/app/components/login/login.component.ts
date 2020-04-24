import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    correo: '',
    clave: ''
  }

  constructor() { }

  ngOnInit(): void {
  }


  login(): void{
    console.log(this.user)
  }

}

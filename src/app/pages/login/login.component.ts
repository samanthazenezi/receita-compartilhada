import { Router } from '@angular/router';
import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/model/login.model';
import { Token } from 'src/app/model/token.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor( private api: ApiService, private route: Router) { }

  ngOnInit(): void {
  }


  salvar(){
    let body = new Login();

    body.userName = this.formLogin.controls.userName.value;
    body.password = this.formLogin.controls.password.value;

    this.api.post("auth", body).subscribe( response => {
      var token = response as Token;
      localStorage.setItem("token", token.token)
      
      this.route.navigateByUrl("")
    });
    
  }
}

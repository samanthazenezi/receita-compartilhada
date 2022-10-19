import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/model/new-user.model';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-novouser',
  templateUrl: './novouser.component.html',
  styleUrls: ['./novouser.component.css']
})
export class NovouserComponent implements OnInit {

  newUser: NewUser

  formNewUser = new FormGroup({
    nome: new FormControl('', Validators.required),
    funcao: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private api: ApiService, 
    private _snackBar: MatSnackBar, 
    private router: Router) { }

  ngOnInit(): void {
  }

  salvar(){
    let body = new NewUser();

    body.userName = this.formNewUser.controls.nome.value;
    body.role = this.formNewUser.controls.funcao.value;
    body.password = this.formNewUser.controls.password.value;


    this.api.post("user", body).subscribe( x => this.router.navigateByUrl(""),
    error => { this.openSnackBar("Opa! Algo deu errado", "Ok") }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

}

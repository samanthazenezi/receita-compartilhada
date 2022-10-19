import { ApiService } from './../../Services/api.service';
import { Receita } from './../../model/receita.model';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  receitas : Receita[] = []

  constructor(private api: ApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.api.get<Receita[]>("recipes").subscribe( response => {
      response.forEach( x => {
        this.receitas.push(x)
      })
    }, error => { this.openSnackBar("Opa! Algo deu errado", "Ok")} 
    )
  }

  delete(id: string) {
    this.api.delete("recipes/" + id).subscribe(
      sucess => { window.location.reload() },
      error => { this.openSnackBar("Erro ao remover a receita", "Ok")})
  }

  taLogado(){
    // obtem o token
    var token = localStorage.getItem("token");

    // retorna verdadeiro se tiver token
    if (token)  {
      return true
    } else {
    // retorna falso se nao tiver token
      return false
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}

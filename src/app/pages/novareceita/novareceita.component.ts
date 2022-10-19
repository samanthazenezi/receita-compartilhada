import { ApiService } from './../../Services/api.service';
import { Ingredientes } from './../../model/ingredientes.model';
import { ReceitaDetalhada } from './../../model/receita-detalhada.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-novareceita',
  templateUrl: './novareceita.component.html',
  styleUrls: ['./novareceita.component.css']
})
export class NovareceitaComponent implements OnInit {

  listaIngredientes: Ingredientes[] = [];

  formIngredientes = new FormGroup({
    nome: new FormControl('', Validators.required),
    quantidade: new FormControl('', Validators.required),
    medida: new FormControl('', Validators.required),
  });

  formDescricao = new FormGroup({
    preparo: new FormControl('', Validators.required),
    nomeReceita: new FormControl('', Validators.required),
    nomeUser: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required)
  });

  constructor(
    private api: ApiService, 
    private route: Router, 
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  adicionarIngredientes() {
    let ingred = new Ingredientes();
    ingred.name = this.formIngredientes.controls.nome.value;
    ingred.amount = this.formIngredientes.controls.quantidade.value;
    ingred.unit = this.formIngredientes.controls.medida.value;

    this.listaIngredientes.push(ingred);
    this.formIngredientes.reset();
  }

  salvar(){
    let body = new ReceitaDetalhada();

    body.name = this.formDescricao.controls.nomeReceita.value;
    body.preparationMode = this.formDescricao.controls.preparo.value;
    body.category = this.formDescricao.controls.categoria.value;
    body.user = this.formDescricao.controls.nomeUser.value;
    body.ingredients = this.listaIngredientes

    this.api.post("recipes", body).subscribe( x => this.route.navigateByUrl(""),
    error => { this.openSnackBar("Opa, algo deu errado", "Ok") }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}

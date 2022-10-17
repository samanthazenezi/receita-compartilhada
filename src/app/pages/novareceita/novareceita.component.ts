import { ApiService } from './../../Services/api.service';
import { Ingredientes } from './../../model/ingredientes.model';
import { ReceitaDetalhada } from './../../model/receita-detalhada.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';



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
    preparo: new FormControl('', Validators.required),
    nomeReceita: new FormControl('', Validators.required),
    nomeUser: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required)
  });

  constructor(private api: ApiService, private route: Router) { }

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
    let modoPreparo = this.formIngredientes.controls.preparo.value;
    let body = new ReceitaDetalhada();

    body.name = this.formIngredientes.controls.nomeReceita.value;
    body.preparationMode = this.formIngredientes.controls.preparo.value;
    body.category = this.formIngredientes.controls.categoria.value;
    body.user = this.formIngredientes.controls.nomeUser.value;
    body.ingredients = this.listaIngredientes

    this.api.post("recipes", body).subscribe( x => this.route.navigateByUrl(""),
    error => {
      alert("Calma bb!")
    } 
    ) 
  }
}

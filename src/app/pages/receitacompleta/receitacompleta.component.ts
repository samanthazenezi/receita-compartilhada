import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitaDetalhada } from 'src/app/model/receita-detalhada.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredientes } from 'src/app/model/ingredientes.model';

@Component({
  selector: 'app-receitacompleta',
  templateUrl: './receitacompleta.component.html',
  styleUrls: ['./receitacompleta.component.css']
})
export class ReceitacompletaComponent implements OnInit {

  detalhe : ReceitaDetalhada
  id = this.route.snapshot.paramMap.get('id');

  formEdicao = new FormGroup({
    nomeIngrediente: new FormControl('', Validators.required),
    quantidade: new FormControl('', Validators.required),
    medida: new FormControl('', Validators.required),
    preparo: new FormControl('', Validators.required),
    nomeReceita: new FormControl('', Validators.required),
    nomeUser: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required)
  });

  constructor(private api: ApiService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.api.get<ReceitaDetalhada>("recipes/" + this.id).subscribe( response => {
      this.detalhe = response;
    }, error => {
      alert("Error")
    } )
  }

  openClose() {
    this.formEdicao.controls.nomeReceita.setValue(this.detalhe.name);
    this.formEdicao.controls.categoria.setValue(this.detalhe.category);
    this.formEdicao.controls.nomeUser.setValue(this.detalhe.user);
    this.formEdicao.controls.preparo.setValue(this.detalhe.preparationMode);

    document.getElementById('modal').classList.toggle('visivel')
  }

  remover(igrediente: Ingredientes){
    var ingredientesAtualizados = this.detalhe.ingredients.filter(x => x.name !== igrediente.name);
    this.detalhe.ingredients = ingredientesAtualizados;
  }

  atualizar(){
  }

  salvar(){
    this.detalhe.category = this.formEdicao.controls.categoria.value;
    this.detalhe.name = this.formEdicao.controls.nomeReceita.value;
    this.detalhe.user = this.formEdicao.controls.nomeUser.value;
    this.detalhe.preparationMode = this.formEdicao.controls.preparo.value;

    this.api.put("recipes/" + this.id, this.detalhe).subscribe(
      successo => { window.location.reload() },
      err => { alert("Calma jaja a gente atualiza...") }
    )
  }

}

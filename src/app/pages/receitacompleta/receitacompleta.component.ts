import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitaDetalhada } from 'src/app/model/receita-detalhada.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-receitacompleta',
  templateUrl: './receitacompleta.component.html',
  styleUrls: ['./receitacompleta.component.css']
})
export class ReceitacompletaComponent implements OnInit {

  detalhe : ReceitaDetalhada

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
    const id = this.route.snapshot.paramMap.get('id'); 

    this.api.get<ReceitaDetalhada>("recipes/" + id).subscribe( response => {
      this.detalhe = response;
    }, error => {
      alert("Error")
    } )
  }

  openClose() {
    document.getElementById('modal').classList.toggle('visivel')
  }
}

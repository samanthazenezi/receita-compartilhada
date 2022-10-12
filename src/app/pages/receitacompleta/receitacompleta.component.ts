import { Ingredientes } from './../../model/ingredientes.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitaDetalhada } from 'src/app/model/receita-detalhada.model';

@Component({
  selector: 'app-receitacompleta',
  templateUrl: './receitacompleta.component.html',
  styleUrls: ['./receitacompleta.component.css']
})
export class ReceitacompletaComponent implements OnInit {

  detalhe : ReceitaDetalhada

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 
    let url = "https://recipes-api-production-2d9d.up.railway.app/api/recipes/" + id;

    this.http.get<ReceitaDetalhada>(url).subscribe( response => {
      this.detalhe = response;
    }, error => {
      alert("Error")
    } )
  }

}

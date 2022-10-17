import { ApiService } from './../../Services/api.service';
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

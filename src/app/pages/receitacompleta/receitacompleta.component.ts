import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaDetalhada } from 'src/app/model/receita-detalhada.model';
import { window } from 'rxjs';


@Component({
  selector: 'app-receitacompleta',
  templateUrl: './receitacompleta.component.html',
  styleUrls: ['./receitacompleta.component.css']
})
export class ReceitacompletaComponent implements OnInit {

  detalhe : ReceitaDetalhada
  id = this.route.snapshot.paramMap.get('id');

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.api.get<ReceitaDetalhada>("recipes/" + this.id).subscribe( response => {
      this.detalhe = response;
    }, error => {
      alert("Error")
    } )
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


}

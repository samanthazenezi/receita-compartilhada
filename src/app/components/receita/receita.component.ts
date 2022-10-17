import { ApiService } from './../../Services/api.service';
import { Receita } from './../../model/receita.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  receitas : Receita[] = []

  constructor( private api: ApiService) { }

  ngOnInit(): void {

    this.api.get<Receita[]>("recipes").subscribe( response => {
      response.forEach( x => {
        this.receitas.push(x)
      })
    }, error => {
      alert("Calma bb!")
    } )
  }

  delete(id: string) {
    this.api.delete("recipes/" + id).subscribe( sucess => {
      window.location.reload()
    })
  }

}

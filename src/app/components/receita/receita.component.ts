import { ReceitaDetalhada } from 'src/app/model/receita-detalhada.model';
import { Receita } from './../../model/receita.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  receitas : Receita[] = []

  constructor(private http: HttpClient) { }
  url = "https://recipes-api-production-2d9d.up.railway.app/api/recipes/"

  ngOnInit(): void {

    this.http.get<Receita[]>(this.url).subscribe( response => {
      response.forEach( x => {
        this.receitas.push(x)
      })
    }, error => {
      alert("Calma bb!")
    } )
  }

  delete(id: string) {
    this.http.delete(this.url + id).subscribe( sucess => {
      alert("Receita deletada!")

      window.location.reload()
    })
  } 
  


}

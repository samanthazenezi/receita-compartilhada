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

  ngOnInit(): void {
    let url = "https://recipes-api-production-2d9d.up.railway.app/api/recipes"

    this.http.get<Receita[]>(url).subscribe( response => {
      response.forEach( x => {
        this.receitas.push(x)
      })
      console.log(response)
    }, error => {
      alert("Calma bb!")
    } )
  }

}

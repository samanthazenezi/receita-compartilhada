import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novareceita',
  templateUrl: './novareceita.component.html',
  styleUrls: ['./novareceita.component.css']
})
export class NovareceitaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  adicionarIngrediente (){
    let ingrediente = document.getElementById("input");
    let listaIngredientes = document.getElementById("ingredientes").innerHTML;

    listaIngredientes += "<li>" +ingrediente+ "<li>"

    document.getElementById("input").innerHTML = listaIngredientes
}
}

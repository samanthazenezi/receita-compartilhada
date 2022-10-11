import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitacompleta',
  templateUrl: './receitacompleta.component.html',
  styleUrls: ['./receitacompleta.component.css']
})
export class ReceitacompletaComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

}

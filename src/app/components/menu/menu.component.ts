import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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

  logout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl("")
  }
}

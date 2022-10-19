import { EdicaoComponent } from './pages/edicao/edicao.component';
import { LoginComponent } from './pages/login/login.component';
import { NovareceitaComponent } from './pages/novareceita/novareceita.component';
import { ReceitacompletaComponent } from './pages/receitacompleta/receitacompleta.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovouserComponent } from './pages/novouser/novouser.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "receita/:id", component: ReceitacompletaComponent },
  { path: "nova-receita", component: NovareceitaComponent },
  { path: "login", component: LoginComponent },
  { path: "editar-receita/:id", component: EdicaoComponent },
  { path: "novo-usuario", component: NovouserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

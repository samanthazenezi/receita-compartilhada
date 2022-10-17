import { LoginComponent } from './pages/login/login.component';
import { NovareceitaComponent } from './pages/novareceita/novareceita.component';
import { ReceitacompletaComponent } from './pages/receitacompleta/receitacompleta.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "receita/:id", component: ReceitacompletaComponent },
  { path: "nova-receita", component: NovareceitaComponent },
  { path: "", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

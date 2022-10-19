import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Ingredientes } from 'src/app/model/ingredientes.model';
import { ReceitaDetalhada } from 'src/app/model/receita-detalhada.model';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  detalhe: ReceitaDetalhada
  ingred: Ingredientes
  id = this.route.snapshot.paramMap.get('id');

  formEdicao = new FormGroup({
    nomeIngrediente: new FormControl('', Validators.required),
    quantidade: new FormControl('', Validators.required),
    medida: new FormControl('', Validators.required),
    preparo: new FormControl('', Validators.required),
    nomeReceita: new FormControl('', Validators.required),
    nomeUser: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required)
  });

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.api.get<ReceitaDetalhada>("recipes/" + this.id).subscribe( response => {
      this.detalhe = response;
      this.formEdicao.controls.nomeReceita.setValue(this.detalhe.name);
      this.formEdicao.controls.categoria.setValue(this.detalhe.category);
      this.formEdicao.controls.nomeUser.setValue(this.detalhe.user);
      this.formEdicao.controls.preparo.setValue(this.detalhe.preparationMode);
    }, error => {
      alert("Error")
    } )
  }

  remover(igrediente: Ingredientes){
    var ingredientesAtualizados = this.detalhe.ingredients.filter(x => x.name !== igrediente.name);
    this.detalhe.ingredients = ingredientesAtualizados;
  }

  atualizar(ig: Ingredientes){
    this.openDialog(ig)
  }

  salvar(){
    this.detalhe.category = this.formEdicao.controls.categoria.value;
    this.detalhe.name = this.formEdicao.controls.nomeReceita.value;
    this.detalhe.user = this.formEdicao.controls.nomeUser.value;
    this.detalhe.preparationMode = this.formEdicao.controls.preparo.value;

    this.api.put("recipes/" + this.id, this.detalhe).subscribe(
      successo => { this.router.navigateByUrl("receita/" + this.id) },
      err => { alert("Calma jaja a gente atualiza...") }
    )
  }

  openDialog(ingrediente: Ingredientes): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: ingrediente,
    });

    dialogRef.afterClosed().subscribe();
  }

}

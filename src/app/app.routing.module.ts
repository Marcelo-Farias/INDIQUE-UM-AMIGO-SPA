import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"

import { Routes } from '@angular/router';
import { IncluirIndicacaoComponent } from './incluir-indicacao/incluir-indicacao.component';
import { ListarIndicacoesComponent } from './listar-indicacoes/listar-indicacoes.component';

export const routes: Routes = [
  {path: '', redirectTo: 'incluir', pathMatch: 'full'},
  {path: 'incluir', component: IncluirIndicacaoComponent},
  {path: 'listar', component: ListarIndicacoesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}

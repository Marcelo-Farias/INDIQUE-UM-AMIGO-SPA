import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"

import { Routes } from '@angular/router';
import { IncluirIndicacaoComponent } from './incluir-indicacao/incluir-indicacao.component';
import { ListarIndicacoesComponent } from './listar-indicacoes/listar-indicacoes.component';
import { ListarStatusComponent } from './listar-status/listar-status.component';

export const routes: Routes = [
  {path: '', redirectTo: 'incluir', pathMatch: 'full'},
  {path: 'incluir', component: IncluirIndicacaoComponent},
  {path: 'listar', component: ListarIndicacoesComponent},
  {path: 'status', component: ListarStatusComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IncluirIndicacaoComponent } from './incluir-indicacao/incluir-indicacao.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { ListarIndicacoesComponent } from './listar-indicacoes/listar-indicacoes.component';
import { ListarStatusComponent } from './listar-status/listar-status.component';
import { ExcluirIndicacaoComponent } from './excluir-indicacao/excluir-indicacao.component';
import { BotaoStatusComponent } from './botao-status/botao-status.component';

@NgModule({
  declarations: [
    AppComponent,
    IncluirIndicacaoComponent,
    ListarIndicacoesComponent,
    ListarStatusComponent,
    ExcluirIndicacaoComponent,
    BotaoStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

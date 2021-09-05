import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IncluirIndicacaoComponent } from './incluir-indicacao/incluir-indicacao.component';
import { FormsModule } from '@angular/forms';
import { ListarIndicacoesComponent } from './listar-indicacoes/listar-indicacoes.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IncluirIndicacaoComponent,
    ListarIndicacoesComponent
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

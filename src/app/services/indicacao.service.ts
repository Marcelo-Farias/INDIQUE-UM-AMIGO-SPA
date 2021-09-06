import { StatusDasIndicacoes } from './../models/statusdasindicacoes.model';
import { NovaIndicacao } from './../models/send/novaindicacao.model';
import { Indicacoes } from './../models/indicacoes.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicacaoService {
  private listaIndicacoes: any[];
  private urlIndicacoes = "http://localhost:8000/api/indicacoes";
  private urlStatus = "http://localhost:8000/api/statusdasindicacoes";

  constructor(private httpClient: HttpClient ) {
    this.listaIndicacoes = [];
  }

  get indicacoes(){
    return this.listaIndicacoes;
  }

  adicionar (indicacao: any) {
    this.listaIndicacoes.push(indicacao);
  }

  // Recebe todas as indicações e informações da paginação.
  getIndicacoes(): Observable<Indicacoes[]> {
    return this.httpClient.get<Indicacoes[]>(this.urlIndicacoes)
  }

  // Recebe todos os status das indicações e informações da paginação.
  getTodosStatus(): Observable<StatusDasIndicacoes[]> {
    return this.httpClient.get<StatusDasIndicacoes[]>(this.urlStatus)
  }

  // Envia uma nova indicação.
  sendIndicacao(novaIndicacao: NovaIndicacao): Observable<NovaIndicacao>{
    return this.httpClient.post<NovaIndicacao>( this.urlIndicacoes, novaIndicacao);
  }

  // Deletar uma indicação.
  deleteIndicacao(id: string){
    const novaUrl = this.urlIndicacoes + "/" + id;
    return this.httpClient.delete(novaUrl);
  }

  // Alterar status de uma indicação.
  updateIndicacao(id: string){
    const novaUrl = this.urlIndicacoes + "/" + id;
    return this.httpClient.put(novaUrl, {});
  }

}

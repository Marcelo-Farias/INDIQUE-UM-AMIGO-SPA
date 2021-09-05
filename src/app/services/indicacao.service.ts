import { Indicacoes } from './../models/indicacoes.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicacaoService {
  private listaIndicacoes: any[];
  private url = "http://localhost:8000/api/indicacoes";

  constructor(private httpClient: HttpClient ) {
    this.listaIndicacoes = [];
  }

  get indicacoes(){
    return this.listaIndicacoes;
  }

  adicionar (indicacao: any) {
    this.listaIndicacoes.push(indicacao);
  }


  // Obtem todas as indicações e informações da paginação.
  getIndicacoes (): Observable<Indicacoes[]> {
    return this.httpClient.get<Indicacoes[]>(this.url)
  }



}

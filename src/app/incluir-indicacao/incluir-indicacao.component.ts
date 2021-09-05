import { IndicacaoService } from './../services/indicacao.service';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector:'app-incluir-indicacao',
  templateUrl: './incluir-indicacao.component.html',
  styleUrls: ['./incluir-indicacao.component.scss']
})
export class IncluirIndicacaoComponent{

  nome: string;
  cpf: string;
  telefone: string;
  email: string;

  constructor(private service: IndicacaoService){

  }

  incluir() {
    console.log('Solicitada a inclusão da indicação.');

    const dadosInseridos = {nome: this.nome, cpf: this.cpf, telefone: this.telefone, email: this.email};
    this.service.adicionar(dadosInseridos);
    this.limparCampos();
  }

  limparCampos(){
    this.nome = '';
    this.cpf = '';
    this.telefone = '';
    this.email = '';
  }
}

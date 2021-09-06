import { NovaIndicacao } from './../models/send/novaindicacao.model';
import { IndicacaoService } from './../services/indicacao.service';
import { Component } from "@angular/core";

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

    const dadosInseridos: NovaIndicacao = {nome: this.nome, cpf: this.cpf, telefone: this.telefone, email: this.email};
    this.service.sendIndicacao(dadosInseridos).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => {
        console.error(error);
        console.log(error['error']['error']);
      }
    );


  }

  limparCampos(){
    this.nome = '';
    this.cpf = '';
    this.telefone = '';
    this.email = '';
  }
}

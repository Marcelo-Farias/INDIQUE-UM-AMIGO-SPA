import { Indicacoes } from './../models/indicacoes.model';
import { IndicacaoService } from './../services/indicacao.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-indicacoes',
  templateUrl: './listar-indicacoes.component.html',
  styleUrls: ['./listar-indicacoes.component.scss']
})
export class ListarIndicacoesComponent implements OnInit {

  indicacoesData: any;

  constructor(private service: IndicacaoService) {

  }

  ngOnInit(): void {
    this.service.getIndicacoes().subscribe((indicacoes: Indicacoes[])=>{
      console.table(indicacoes);
      this.indicacoesData = indicacoes['data'];
    });
  }

}

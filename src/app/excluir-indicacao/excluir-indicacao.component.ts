import { IndicacaoService } from './../services/indicacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-indicacao',
  templateUrl: './excluir-indicacao.component.html',
  styleUrls: ['./excluir-indicacao.component.scss']
})
export class ExcluirIndicacaoComponent implements OnInit {


  constructor(private service: IndicacaoService) {}


  ngOnInit(): void {}




}

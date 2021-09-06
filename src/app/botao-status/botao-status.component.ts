import { IndicacaoService } from './../services/indicacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-status',
  templateUrl: './botao-status.component.html',
  styleUrls: ['./botao-status.component.scss']
})
export class BotaoStatusComponent implements OnInit {


  constructor(private service: IndicacaoService) {}


  ngOnInit(): void {}




}

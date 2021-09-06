
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { StatusDasIndicacoes } from './../models/statusdasindicacoes.model';
import { IndicacaoService } from './../services/indicacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-status',
  templateUrl: './listar-status.component.html',
  styleUrls: ['./listar-status.component.scss']
})
export class ListarStatusComponent implements OnInit {

    statusIndicacoesData: any;

  constructor(
    private service: IndicacaoService,
    private router: Router,
    private location: Location
    ) {

  }

  ngOnInit(): void {

    // Pegando da API os dados da tabela statusDasIndecacoes.
    this.service.getTodosStatus().subscribe((status: StatusDasIndicacoes[])=>{
      console.table(status);
      this.statusIndicacoesData = status['data'];
    });

  };


  // Ação do botão de excluir.
  excluir(id :string){
    this.service.deleteIndicacao(id).subscribe(
      data => {console.log(data);}
      );

    // Reload da página.
    location.reload();
  }

  alterarStatus(id: string ){
    this.service.updateIndicacao(id).subscribe(
      data=> {console.log(data);}
    );

    // Reload da página.
    location.reload();
  }


}


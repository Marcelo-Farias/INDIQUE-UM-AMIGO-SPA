import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Indicacoes } from './../models/indicacoes.model';
import { StatusDasIndicacoes } from './../models/statusdasindicacoes.model';
import { IndicacaoService } from './../services/indicacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-indicacoes',
  templateUrl: './listar-indicacoes.component.html',
  styleUrls: ['./listar-indicacoes.component.scss']
})
export class ListarIndicacoesComponent implements OnInit {

  indicacoesData: any;
  statusIndicacoesData: any;

  constructor(
    private service: IndicacaoService,
    private router: Router,
    private location: Location
    ) {

  }

  ngOnInit(): void {

    // Pegando da API todas as indicações.
    this.service.getIndicacoes().subscribe((indicacoes: Indicacoes[])=>{
      console.table(indicacoes);
      this.indicacoesData = indicacoes['data'];
    });

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

    // Redirecionando para a lista de status.
    this.router.navigateByUrl('status').then(()=>
    location.reload()
    );
  }


}


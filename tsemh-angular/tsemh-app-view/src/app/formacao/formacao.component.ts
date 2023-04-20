import { Component, OnInit } from '@angular/core';
import { Formacao } from '../models/formacao';
import { FormacaoService } from '../service/formacao.service';

@Component({
  selector: 'tsemh-formacao', 
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css']
})
export class FormacaoComponent implements OnInit{
  
  public tituloMain: string = 'formações';

  public visaoCategoria: boolean = true;

  public entidades: Formacao[] = []

  constructor(private formacaoService: FormacaoService) {  }

  determinaBoolean() {
    if(this.entidades.length >= 6) {
      this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }
   public visaoPaginacao: boolean = this.determinaBoolean();

   carregarFormacoes() {
    this.formacaoService.getAll().subscribe(
      (formacoes: Formacao[]) => {
        this.entidades = formacoes;
      },
      (e: any) => {
        console.error(e)
      }
    ); 
   }

   ngOnInit(): void {
     this.carregarFormacoes();
   }
}

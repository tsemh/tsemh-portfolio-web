import { Component } from '@angular/core';
import { Categoria } from '../models/Categoria';
import { Projeto } from '../models/Projeto';
import { ProjetoService } from '../service/projeto.service';

@Component({
  selector: 'tsemh-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent {

  public tituloMain: string = 'projetos';

  public visaoCategoria: boolean = true;

  public entidades: Projeto[] = []

  constructor(private projetoService: ProjetoService) {  }

  determinaBoolean() {
    if(this.entidades.length >= 6) {
      this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }
   public visaoPaginacao: boolean = this.determinaBoolean();

   carregarProjeto() {
    this.projetoService.getAll().subscribe(
      (projeto: Projeto[]) => {
        this.entidades = projeto;
      },
      (e: any) => {
        console.error(e)
      }
    ); 
   }

   ngOnInit(): void {
     this.carregarProjeto();
   }
}

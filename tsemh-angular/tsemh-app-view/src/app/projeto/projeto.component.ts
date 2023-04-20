import { Component } from '@angular/core';
import { Categoria } from '../models/Categoria';

@Component({
  selector: 'tsemh-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent {

  public tituloMain: string = 'projetos';

  public visaoCategoria: boolean = true;

  public categorias: Categoria[] = [];

  public entidades= [ 
    {
     id: 1, tipo: 'certificados', titulo: 'portfolio', link: 'link', descricao: 'descrição', imagem: 'caminho da imagem', descricaoImagem: 'descrição da imagem'
    } 
  ]

  determinaBoolean() {
    if(this.entidades.length >= 6) {
      this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }

   public visaoPaginacao: boolean = this.determinaBoolean();

}

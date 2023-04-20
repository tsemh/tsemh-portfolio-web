import { Component } from '@angular/core';
import { Categoria } from '../models/Categoria';

@Component({
  selector: 'tsemh-formacao', 
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css']
})
export class FormacaoComponent {
  
  public tituloMain: string = 'formações';

  public visaoCategoria: boolean = true;

  public categorias: Categoria[] = [];


  public entidades= [ 
    {
     id: 1,tipo: 'formações', titulo: 'fiap', link: 'link', descricao: 'descrição', imagem: 'caminho da imagem', descricaoImagem: 'descrição da imagem'
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

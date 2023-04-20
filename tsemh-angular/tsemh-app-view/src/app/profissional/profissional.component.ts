import { Component } from '@angular/core';
import { Categoria } from '../models/Categoria';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent {

  public tituloMain: string = 'profissional';

  public visaoCategoria: boolean = true;

  public categorias: Categoria[] = [];

  
  public entidades= [ 
    {
     id: 1, tipo: 'profissional', titulo: 'G+D', link: 'link', descricao: 'descrição', imagem: 'caminho da imagem', descricaoImagem: 'descrição da imagem'
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

import { Component } from '@angular/core';

@Component({
  selector: 'tsemh-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent {
  
  public tituloMain: string = 'geral';

  public visaoCategoria: boolean = true;

  public entidades= [ 
    {
     id: 1, tipo: '', titulo: '', link: 'link', descricao: 'descrição', imagem: 'caminho da imagem', descricaoImagem: 'descrição da imagem'
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

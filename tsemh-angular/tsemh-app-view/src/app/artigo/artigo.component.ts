import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tsemh-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  public tituloMain: string = 'postagens';
  public visaoCategoria: boolean = true;

  public categorias = [];
  public itens= [ 
    {
     idArtigo: 1, 
     tipoPostagem: 'Tipo 1', 
     tituloPostagem: 'string', 
     linkPostagem: 'string', 
     descricaoPostagem: 'string', 
     imagemPostagem: 'string', 
     descricaoImagemPostagem: 'string'
    } 
  ];

  determinaBoolean() {
    if(this.itens.length >= 6) {
      this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }

   public visaoPaginacao: boolean = this.determinaBoolean();

   constructor() { }
   ngOnInit() {
  }

}

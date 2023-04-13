import { Component } from '@angular/core';

@Component({
  selector: 'tsemh-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent {
  
  public tituloMain: string = 'geral';

  public visaoCategoria: boolean = true;

  public itens= [

    { id: 1,
      titulo: 'Primeiro Destaque',
      link: 'link terceiro destaque',
      tags: [
        { id: 1,
          titulo: 'tag 1',
          link: 'postagens' 
        },
        { id: 2,
          titulo: 'tag 2',
          link: 'link da tag' 
        },
        { id: 3,
          titulo: 'tag 3',
          link: 'link da tag' 
        },
      ],
      imagem: 'image',
      imgDesc: 'descrição'
    },
    { id: 2,
      titulo: 'Segundo Destaque',
      link: 'link terceiro destaque',
      tags: [
        { id: 1,
          titulo: 'tag 1',
          link: 'link da tag' 
        },
        { id: 2,
          titulo: 'tag 2',
          link: 'link da tag' 
        },
        { id: 3,
          titulo: 'tag 3',
          link: 'link da tag' 
        },
      ],
      imagem: 'image',
      imgDesc: 'descrição'
    },
  ];

  determinaBoolean() {
    if(this.itens.length >= 6) {
      this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }

   public visaoPaginacao: boolean = this.determinaBoolean();

}

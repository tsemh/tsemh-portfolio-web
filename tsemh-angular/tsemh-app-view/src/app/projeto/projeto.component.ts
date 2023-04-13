import { Component } from '@angular/core';

@Component({
  selector: 'tsemh-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent {

  public tituloMain: string = 'projetos';

  public visaoCategoria: boolean = true;

  public categorias = [

        { id: 0,
          titulo: 'tag 0',
          link: '0' ,
          grupo: 'projetos'
        },
        { id: 1,
          titulo: 'tag 1',
          link: '0',
          grupo: 'postagens'
        },
        { id: 2,
          titulo: 'tag 2',
          link: '0', 
          grupo: 'profissional'
        },
        { id: 3,
          titulo: 'tag 3',
          link: '0',
          grupo: 'certificados'
        },
        { id: 4,
          titulo: 'tag 4',
          link: '0',
          grupo: 'formações'
        },
  ];

  public itens= [
    { id: 1,
      titulo: 'Primeiro Destaque',
      link: '00',
      imagem: 'image',
      imgDesc: 'descrição',
      descricao: 'descricão do item descricão do item descricão do item descricão do item descricão do item descricão do item descricão do item descricão do item descricão do item descricão do item descricão do item descricão do item v descricão do item descricão do item descricão do item descricão do item vdescricão do item descricão do item descricão do item descricão do item descricão do item descricão do item descricão do item',
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
   },
  ]

  determinaBoolean() {
    if(this.itens.length >= 6) {
      this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }

   public visaoPaginacao: boolean = this.determinaBoolean();

}

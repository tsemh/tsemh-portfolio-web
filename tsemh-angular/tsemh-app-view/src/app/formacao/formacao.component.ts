import { Component } from '@angular/core';

@Component({
  selector: 'tsemh-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css']
})
export class FormacaoComponent {
  
  public tituloMain: string = 'formações';

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

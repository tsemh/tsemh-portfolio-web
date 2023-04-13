import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tituloMain: string = 'destaques';

  public visaoPaginacao: boolean = false;
  public visaoCategoria: boolean = false;
  
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
    { id: 3,
      titulo: 'Terceiro Destaque',
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
    { id: 4,
      titulo: 'Terceiro Destaque',
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
    { id: 5,
      titulo: 'Terceiro Destaque',
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
    { id: 6,
      titulo: 'Terceiro Destaque',
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

  public tiago = {
    nome: 'Tiago B. da Silva',
    titulo: 'Desenvolvedor Angular | Java | .NET',
    curriculo: '../../assets\curriculo\Tiago-Junior-Angular-Java-dotNet.pdf'
  };

  constructor() {}

  ngOnInit(): void {
  }

}

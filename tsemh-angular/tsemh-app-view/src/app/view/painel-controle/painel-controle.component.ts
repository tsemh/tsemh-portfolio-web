import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'tsemh-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css']
})
export class PainelControleComponent implements OnInit{

  @Input() pages: number = 1;
  @Input() visaoPaginacao: boolean = false;


constructor() {}

ngOnInit(): void {
  
}
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
  { id: 2,
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
  { id: 2,
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
  { id: 2,
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
  { id: 2,
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
  { id: 2,
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
  { id: 2,
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


}

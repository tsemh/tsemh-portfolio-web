import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tsemh-global-lista',
  templateUrl: './global-lista.component.html',
  styleUrls: ['./global-lista.component.css']
})
export class GlobalListaComponent {

  @Input() visaoPaginacao: boolean = true;
  @Input() visaoCategoria: boolean = true;

  @Input() tituloMain: string = '';

  @Input() pages: number = 1;

  @Input() itens = [

    { id: 0,
      titulo: '',
      link: '',
      tags: [
        { id: 0,
          titulo: '',
          link: '0' 
        }
      ],
      imagem: '',
      imgDesc: ''     
    },
  ];
  @Input() categorias = [
    { 
      id: 0,
      titulo: '',
      link: '' ,
      grupo: ''
    },
  ]  

  constructor(private router: Router) {}

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

}

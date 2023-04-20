import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';

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

  @Input() public entidades= [ 
    {
     id: 0, tipo: '', titulo: '', link: '', descricao: '', imagem: '', descricaoImagem: ''
    } 
  ]

  @Input() public categorias: Categoria[] = [];


  constructor(private router: Router) {}

  redirectTo(url:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([url]));
 }

}

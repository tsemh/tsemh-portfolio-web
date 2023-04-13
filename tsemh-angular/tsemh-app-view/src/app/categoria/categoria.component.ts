import { Component, Input } from '@angular/core';

@Component({
  selector: 'tsemh-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  @Input() tituloMain: string = '';

  @Input() categorias = [
    { 
      id: 0,
      titulo: '',
      link: '' ,
      grupo: ''
    },
  ] 
}
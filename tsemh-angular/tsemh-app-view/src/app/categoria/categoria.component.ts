import { Component, Input } from '@angular/core';
import { Categoria } from '../models/Categoria';

@Component({
  selector: 'tsemh-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  @Input() tituloMain: string = '';

  @Input() public categorias = [
    {idCategoria: 0, tipoCategoria: "", tituloCategoria: "", linkCategoria: ""},
  ]  
}


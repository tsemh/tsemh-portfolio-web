import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../models/Categoria';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'tsemh-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{

  @Input() tituloMain: string = "";
  @Input() tipo: string = "";
  @Input() categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {
}

 carregaCategoria() {
  this.categoriaService.getByTipo(this.tipo).subscribe(
    (categoria: Categoria[]) => {
      this.categorias = categoria;
    },
    (e: any) => {
      console.error(e)
    }
  ); 
 }

   ngOnInit(): void {
    this.carregaCategoria();
   }
}


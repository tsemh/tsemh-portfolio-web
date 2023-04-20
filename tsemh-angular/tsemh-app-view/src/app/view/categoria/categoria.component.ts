import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../models/Categoria';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'tsemh-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{

  @Input() tituloMain: string = '';

  public categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {
}

  carregarCategorias() {
    this.categoriaService.getAll().subscribe(
      (categorias: Categoria[]) => {
        this.categorias = categorias;
      },
      (e: any) => {
        console.error(e)
      }
    ); 
   }

   ngOnInit(): void {
    this.carregarCategorias();
   }
}


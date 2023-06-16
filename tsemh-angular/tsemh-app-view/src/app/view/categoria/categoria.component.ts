import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from '../../models/Categoria';
import { CategoriaService } from '../../service/categoria.service';
import { RegistroService } from '../../service/registro.service';
import { Registro } from 'src/app/models/Registro';

@Component({
  selector: 'tsemh-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() tituloMain: string = "";
  @Input() tipo: string = "";
  @Input() registro: Registro[] = [];
  @Input() categorias: Categoria[] = [];

  @Output() categoriaSelecionada = new EventEmitter<number>();

  constructor(private router: Router, 
              private categoriaService: CategoriaService,
              private registroService: RegistroService) { }

  selecionarCategoria(idCategoria: number) {
    this.categoriaSelecionada.emit(idCategoria);
  }

  carregaCategoria() {
    this.categorias = [];
    this.categoriaService.getByTipo(this.tipo).subscribe(
      (categoria: Categoria[]) => {
        this.categorias = categoria;
      },
      (e: any) => {
        console.error(e);
      }
    );
  }

  atualizarPagina(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }

  ngOnInit(): void {
    this.carregaCategoria();
  }
}

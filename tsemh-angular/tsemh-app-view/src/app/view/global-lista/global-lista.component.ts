import { CategoriaService } from './../../service/categoria.service';
import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Registro } from 'src/app/models/Registro';
import { RegistroService } from 'src/app/service/registro.service';

@Component({
  selector: 'tsemh-global-lista',
  templateUrl: './global-lista.component.html',
  styleUrls: ['./global-lista.component.css']
})
export class GlobalListaComponent {
  @Input() tituloMain: string = "";
  @Input() tipo: string = "";
  @Input() pages: number = 1;
  @Input() registro: Registro[] = [];
  @Input() categorias: Categoria[] = [];
  @Output() registroSelecionado = new EventEmitter<number>();

  categoriaSelecionada: number = 62;

  constructor(private router: Router, 
              private registroService: RegistroService) { }

              
  atualizarCategoria(idCategoria: number) {
    this.categoriaSelecionada = idCategoria;
    this.carregaRegistroPelaCategoria();
  }

  selecionarRegistro(idRegistro: number) {
    this.registroSelecionado.emit(idRegistro);
  }

  redirectTo(url: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url])
    );
  }

  carregaRegistro() {
    this.registroService.getByTipo(this.tipo).subscribe(
      (projeto: Registro[]) => {
        this.registro = projeto;
      },
      (e: any) => {
        console.error(e);
      }
    );
  }

  carregaRegistroPelaCategoria() {
    this.registroService.getRegistroByCategoria(this.categoriaSelecionada).subscribe(
      (registro: Registro[]) => {
        this.registro = registro;
      },
      (e: any) => {
        console.error(e);
      }
    );
  }

  ngOnInit(): void {
    this.carregaRegistro();
  }
}

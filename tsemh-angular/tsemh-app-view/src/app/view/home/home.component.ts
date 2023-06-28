import { Router } from '@angular/router';
import { UsuarioService } from './../../service/usuario.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Registro } from 'src/app/models/Registro';
import { Usuario } from 'src/app/models/usuariro';
import { RegistroService } from 'src/app/service/registro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tituloMain: string = 'destaques';
  public destaque: boolean = true;
  public usuario!: Usuario;
  @Input() registro: Registro[] = [];
  @Input() categorias: Categoria[] = [];
  @Output() registroSelecionado = new EventEmitter<number>();

  constructor(private router: Router,
              private usuarioService: UsuarioService,
              private registroService: RegistroService) { }

  carregaUsuario() {
    this.usuarioService.getAll().subscribe(
      (tiago: Usuario[]) => {
        this.usuario = tiago[0];
      },
      (e: any) => {
        console.error(e);
      }
    );
  } 

  carregaRegistro() {
    this.registroService.getByDestaque(this.destaque).subscribe(
      (projeto: Registro[]) => {
        this.registro = projeto;
      },
      (e: any) => {
        console.error(e);
      }
    );
  }
  redirectTo(url: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url])
    );
  }
  
  selecionarRegistro(idRegistro: number) {
    this.registroSelecionado.emit(idRegistro);
  }
  ngOnInit(): void {
    this.carregaUsuario();
    this.carregaRegistro();
  }

}

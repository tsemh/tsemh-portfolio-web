import { Router } from '@angular/router';
import { UsuarioService } from './../../service/usuario.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Registro } from 'src/app/models/Registro';
import { Usuario } from 'src/app/models/usuariro';
import { RegistroService } from 'src/app/service/registro.service';
import { CompartilhadoService } from 'src/app/service/compartilhado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tituloMain: string = 'destaques';
  public destaque: boolean = true;
  public usuario!: Usuario;
  public paragrafos: string[] = [];
  @Input() registro: Registro[] = [];
  @Input() categorias: Categoria[] = [];
  @Output() registroSelecionado = new EventEmitter<number>();

  constructor(private router: Router,
              private usuarioService: UsuarioService,
              private registroService: RegistroService,
              private compartilhadoService: CompartilhadoService) { }

  carregaUsuario() {
    this.usuarioService.getAll().subscribe(
      (tiago: Usuario[]) => {
        this.usuario = tiago[0];
        this.separaParagrafos();
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
    this.compartilhadoService.setRegistroId(idRegistro)
  }
  
  separaParagrafos() {
    this.paragrafos = this.usuario.descricao.split('\n\n');
  }

  ngOnInit(): void {
    this.carregaUsuario();
    this.carregaRegistro();
  }

}

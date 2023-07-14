import { Usuario } from 'src/app/models/usuariro';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from 'src/app/service/registro.service';
import { Registro } from 'src/app/models/Registro';

@Component({
  selector: 'tsemh-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css']
})
export class PainelControleComponent implements OnInit{

  public visaoPaginacao: boolean = true;
  public tiposDeRegistro: string[] = [];
  public formUsuario!: FormGroup;
  public usuario!: Usuario;
  public registros: Registro[] = [];
  public pages: number = 1;
  public tipo!: string;


constructor(private usuarioService: UsuarioService,
            private fb: FormBuilder,
            private registroService: RegistroService) { 
              this.criarForm();
             }

ngOnInit(): void { 
  this.carregaUsuario();
  this.carregaTiposDeRegistro();
  this.carregaRegistro();
}

carregaUsuario(): void {
  this.usuarioService.getAll().subscribe(
    (tiago: Usuario[]) => {
      this.usuario = tiago[0];
      this.formUsuario.patchValue(this.usuario);
    },
    (e: any) => {
      console.error(e);
    }
  );
} 

criarForm() {
    this.formUsuario = this.fb.group({
      nome: ['', Validators.required],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
}


enviarUsuario() {
  const { email, senha } = this.formUsuario.value;
  const dados = {
    email: email,
    senha: senha
  };
  const dadosLogin = JSON.stringify(dados);
}

carregaTiposDeRegistro(): void {
  this.registroService.getTiposDeRegistro().subscribe(
    tipos => {
      this.tiposDeRegistro = tipos;
    },
    error => {
      console.error(error);
      // Adicione tratamento de erro adequado aqui
    }
    );
  }
  pegaTipo(tipo: string): void{
    this.tipo = tipo;
    this.carregaRegistroPorTipo();
  }
  
  carregaRegistro() {
  this.registroService.getAll().subscribe(
    (registro: Registro[]) => {
      this.registros = registro;
    },
    (e: any) => {
      console.error(e);
      // Adicione tratamento de erro adequado aqui
    }
  );
}
carregaRegistroPorTipo(): void {
  this.registroService.getByTipo(this.tipo).subscribe(
    (projeto: Registro[]) => {
      this.registros = projeto;
    },
    (e: any) => {
      console.error(e);
    }
  );
}

CliqueTipo(tipo: string): void {
  this.pegaTipo(tipo);
  this.defineCorTipo();
}

defineCorTipo(): void {
  const botoes = document.querySelectorAll('.botao-tipo');
  botoes.forEach(botao => {
    botao.addEventListener('click', function() {
      botoes.forEach(botao => botao.classList.remove('tipoCor'));
  
      botao.classList.add('tipoCor');
    });
  });
}
}

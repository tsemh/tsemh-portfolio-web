import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/Registro';
import { RegistroService } from 'src/app/service/registro.service';
import { formatDate, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CompartilhadoService } from 'src/app/service/compartilhado.service';

@Component({
  selector: 'tsemh-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  registro: Registro = {} as Registro;
  paragrafos: string[] = [];
  dataCriacao: Date | null = null;
  dataCriacaoFormatada: string = '';
  private idSelecionado: number = 0;

  constructor(private registroService: RegistroService,
              private compartilhadoService: CompartilhadoService
              ) { }

  defineRegistroSelecionado(){
    this.idSelecionado = this.compartilhadoService.getRegistroId();
  }
  
  carregaRegistro() {
    this.registroService.getById(this.idSelecionado).subscribe(
      (registro: Registro) => {
        this.registro = registro;
        this.dataCriacao = new Date(this.registro.dataCriacao);
        this.dataCriacaoFormatada = formatDate(this.dataCriacao, 'yyyy MMMM dd, HH:mm \'h\'', 'en-US');
        this.separaParagrafos();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  separaParagrafos() {
    this.paragrafos = this.registro.descricao.split('\n\n');
  }
  
  ngOnInit(): void {
    this.defineRegistroSelecionado();
    registerLocaleData(localePt);
    this.carregaRegistro();
  }
}

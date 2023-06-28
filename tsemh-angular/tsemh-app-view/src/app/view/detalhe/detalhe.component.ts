import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/Registro';
import { RegistroService } from 'src/app/service/registro.service';
import { NgPlural, formatDate, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

@Component({
  selector: 'tsemh-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  registro: Registro = {} as Registro;
  registroSelecionado: number = 85;
  paragrafos: string[] = [];
  dataCriacao: Date | null = null;
  dataCriacaoFormatada: string = '';

  constructor(private registroService: RegistroService) { }

  carregarDetalhes(idRegistro: number) {
    this.registroSelecionado = idRegistro;
    this.carregaRegistro();
  }
  
  carregaRegistro() {
    this.registroService.getById(this.registroSelecionado).subscribe(
      (registro: Registro) => {
        console.log(registro); 
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
    registerLocaleData(localePt);
    this.carregaRegistro();
  }
}

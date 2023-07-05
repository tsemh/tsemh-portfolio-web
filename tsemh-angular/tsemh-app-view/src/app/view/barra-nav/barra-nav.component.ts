import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/service/registro.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'tsemh-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {

  public acessoPainel = true;
  public tiposDeRegistro: string[] = [];

  constructor(private router: Router,
              private registroService: RegistroService,
              private utilService: UtilService) { }

  ngOnInit(): void {
    this.carregarTiposDeRegistro();
  }

  carregarTiposDeRegistro(): void {
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
  pegaTipo(tipo: string){
    this.utilService.setRegistroTipo(tipo)
  }
}


import { Component, ElementRef, HostListener, OnInit, Renderer2, RendererFactory2 } from '@angular/core';
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
  public isHamburgerMenu: boolean = false;

  constructor(private registroService: RegistroService,
              private utilService: UtilService, 
              private renderer: Renderer2, 
              private elementRef: ElementRef) { 
               }

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
  pegaTipo(tipo: string): void{
    this.utilService.setRegistroTipo(tipo)
  }

  hamburguerClique(): void{
      this.isHamburgerMenu = !this.isHamburgerMenu;
  }
}



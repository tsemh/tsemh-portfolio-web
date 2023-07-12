import { Component, HostListener, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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

  constructor(private router: Router,
              private registroService: RegistroService,
              private utilService: UtilService) { 
               }

  ngOnInit(): void {
    this.carregarTiposDeRegistro();
    this.onResize(null);
    this.hamburguerClicadoQuando()
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(window.innerWidth >= 992) {
      this.isHamburgerMenu = false;
    }
  }  
  hamburguerClicadoQuando() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.isHamburgerMenu = false
      }
    })
  }
}
import { Component, OnInit } from '@angular/core';
import { Artigo } from '../../models/Artigo';
import { ArtigoService } from '../../service/artigo.service'; 


@Component({
  selector: 'tsemh-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  public tituloMain: string = 'artigos';

  public visaoCategoria: boolean = true;
  public entidades: Artigo[] = [];

  constructor(private artigoService: ArtigoService) {  }

  determinaBoolean() {
    if(this.entidades.length >= 6) {
      this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }
   public visaoPaginacao: boolean = this.determinaBoolean();


   carregarArtigos() {
    this.artigoService.getAll().subscribe(
      (artigos: Artigo[]) => {
        this.entidades = artigos;
      },
      (e: any) => {
        console.error(e)
      }
    ); 
   }

   ngOnInit(): void {
    this.carregarArtigos();
  }

}

import { Component, OnInit } from '@angular/core';
import { Artigo } from '../models/Artigo';
import { ArtigoService } from '../service/artigo.service'; 


@Component({
  selector: 'tsemh-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  public tituloMain: string = 'artigos';
  public visaoCategoria: boolean = true;

  public categorias = [
    {idCategoria: 1, tipoCategoria: "projetos", tituloCategoria: "titulo 01", linkCategoria: "Link 01"},
    {idCategoria: 2, tipoCategoria: "profissional", tituloCategoria: "titulo 02", linkCategoria: "Link 02"},
    {idCategoria: 3, tipoCategoria: "artigos", tituloCategoria: "titulo 03", linkCategoria: "Link 03"},
    {idCategoria: 4, tipoCategoria: "certificados", tituloCategoria: "titulo 04", linkCategoria: "Link 04"},
    {idCategoria: 5, tipoCategoria: "formacões", tituloCategoria: "titulo 05", linkCategoria: "Link 05"},
  ] 
  public entidades: Artigo[] = [];

  // public entidades= [ 
  //   {
  //    id: 1, tipo: 'artigos', titulo: 'G+D', link: 'link', descricao: 'descrição', imagem: 'caminho da imagem', descricaoImagem: 'descrição da imagem'
  //   } 
  // ]

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

   constructor(private artigoService: ArtigoService) {
   }
   ngOnInit() {
    this.carregarArtigos();
  }

}

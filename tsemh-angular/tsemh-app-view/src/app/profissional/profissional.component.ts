import { Component } from '@angular/core';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent {

  public tituloMain: string = 'profissional';

  public visaoCategoria: boolean = true;

  public categorias = [
    {idCategoria: 1, tipoCategoria: "projetos", tituloCategoria: "titulo 01", linkCategoria: "Link 01"},
    {idCategoria: 2, tipoCategoria: "profissional", tituloCategoria: "titulo 02", linkCategoria: "Link 02"},
    {idCategoria: 3, tipoCategoria: "artigos", tituloCategoria: "titulo 03", linkCategoria: "Link 03"},
    {idCategoria: 4, tipoCategoria: "certificados", tituloCategoria: "titulo 04", linkCategoria: "Link 04"},
    {idCategoria: 5, tipoCategoria: "formacões", tituloCategoria: "titulo 05", linkCategoria: "Link 05"},
  ] 
  
  public entidades= [ 
    {
     id: 1, tipo: 'profissional', titulo: 'G+D', link: 'link', descricao: 'descrição', imagem: 'caminho da imagem', descricaoImagem: 'descrição da imagem'
    } 
  ]

  determinaBoolean() {
    if(this.entidades.length >= 6) {
      this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }

   public visaoPaginacao: boolean = this.determinaBoolean();

}

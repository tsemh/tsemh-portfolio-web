export class Artigo {
  idArtigo: number;
  tipoPostagem: string;
  tituloPostagem: string;
  linkPostagem: string;
  descricaoPostagem: string;
  imagemPostagem: string;
  descricaoImagemPostagem: string;

  constructor(idArtigo: number, tipoPostagem: string, tituloPostagem: string, linkPostagem: string, descricaoPostagem: string, imagemPostagem: string, descricaoImagemPostagem: string) {
    
    this.idArtigo = idArtigo;
    this.tipoPostagem = tipoPostagem;
    this.tituloPostagem = tituloPostagem;
    this.linkPostagem = linkPostagem;
    this.descricaoPostagem = descricaoPostagem;
    this.imagemPostagem = imagemPostagem;
    this.descricaoImagemPostagem = descricaoImagemPostagem;
  }
}

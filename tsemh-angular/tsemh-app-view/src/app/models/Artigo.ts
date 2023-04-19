import { Categoria } from "./Categoria";
import { Usuario } from "./usuariro";

export class Artigo {
  id: number;
  usuario: Usuario;
  categoria: Categoria;
  tipo: string;
  titulo: string;
  link: string;
  descricao: string;
  imagem: string;
  descricaoImagem: string;

  constructor(idArtigo: number, usuario: Usuario, categoria: Categoria, tipo: string, titulo: string, link: string, descricao: string, imagem: string, descricaoImagem: string) {
    
    this.id = idArtigo;
    this.usuario = usuario;
    this.categoria = categoria;
    this.tipo = tipo;
    this.titulo = titulo;
    this.link = link;
    this.descricao = descricao;
    this.imagem = imagem;
    this.descricaoImagem = descricaoImagem;
  }
}

import { Categoria } from "./Categoria";
import { Usuario } from "./usuariro";

export class Registro {
  id: number;
  usuario: Usuario;
  categoria: Categoria;
  tipo: string;
  nome: string;
  link: string;
  descricao: string;
  introducao: string;
  dataCriacao: Date;
  //arquivos: Arquivo[];

  constructor(
    id: number, usuario: Usuario, categoria: Categoria, tipo: string, nome: string, link: string, descricao: string, introducao: string, dataCriacao: Date, /*arquivos: Arquivo[]*/ ) {
    this.id = id;
    this.usuario = usuario;
    this.categoria = categoria;
    this.tipo = tipo;
    this.nome = nome;
    this.link = link;
    this.descricao = descricao;
    this.introducao = introducao;
    this.dataCriacao = dataCriacao;
    //this.arquivos = arquivos;
  }
  
}
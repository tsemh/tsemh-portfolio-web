import { Categoria } from "./Categoria";
import { Usuario } from "./usuario";

export class Registro {
  id: number;
  //usuario: Usuario;
  //categoria: Categoria;
  tipo: string;
  nome: string;
  link: string;
  descricao: string;
  introducao: string;
  dataCriacao: Date;
  destaque: boolean;
  //arquivos: Arquivo[];

  constructor() {
    this.id = 0;
    //this.usuario = usuario;
    //this.categoria = categoria;
    this.tipo = '';
    this.nome = '';
    this.link = '';
    this.descricao = '';
    this.introducao = '';
    this.dataCriacao = new Date('');
    this.destaque = false;
    //this.arquivos = arquivos;
  }
  
}
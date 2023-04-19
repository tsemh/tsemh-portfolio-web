import { Categoria } from "./Categoria";
import { Usuario } from "./usuariro";

export class Projeto {
  idProjeto: number;
  usuario: Usuario;
  categoria: Categoria;
  tipoProjeto: string;
  tituloProjeto: string;
  linkProjeto: string;
  descricaoProjeto: string;
  imagemProjeto: string;
  descricaoimagemProjeto: string;

  constructor(idProjeto: number,usuario: Usuario,categoria: Categoria,tipoProjeto: string,tituloProjeto: string,linkProjeto: string,descricaoProjeto: string,imagemProjeto: string,descricaoimagemProjeto: string) {

    this.idProjeto = idProjeto;
    this.usuario = usuario;
    this.categoria = categoria;
    this.tipoProjeto = tipoProjeto;
    this.tituloProjeto = tituloProjeto;
    this.linkProjeto = linkProjeto;
    this.descricaoProjeto = descricaoProjeto;
    this.imagemProjeto = imagemProjeto;
    this.descricaoimagemProjeto = descricaoimagemProjeto;
  }
}

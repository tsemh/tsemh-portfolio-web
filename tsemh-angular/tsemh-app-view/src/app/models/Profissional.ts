import { Categoria } from "./Categoria";
import { Usuario } from "./usuariro";

class Profissional {
  idProfissional: number;
  usuario: Usuario;
  categoria: Categoria;
  tipoProfissional: string;
  tituloProfissional: string;
  linkProfissional: string;
  descricaoProfissional: string;
  imagemProfissional: string;
  descricaoImagemProfissional: string;
  
  constructor(idProfissional: number, usuario: Usuario, categoria: Categoria, tipoProfissional: string, tituloProfissional: string, linkProfissional: string, descricaoProfissional: string,imagemProfissional: string, descricaoImagemProfissional: string) {
    
    this.idProfissional = idProfissional;
    this.usuario = usuario;
    this.categoria = categoria;
    this.tipoProfissional = tipoProfissional;
    this.tituloProfissional = tituloProfissional;
    this.linkProfissional = linkProfissional;
    this.descricaoProfissional = descricaoProfissional;
    this.imagemProfissional = imagemProfissional;
    this.descricaoImagemProfissional = descricaoImagemProfissional;
  }
}

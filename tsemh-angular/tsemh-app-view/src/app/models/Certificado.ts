import { Categoria } from "./Categoria";
import { Usuario } from "./usuariro";

export class Certificado {
  idCertificado: number;
  usuario: Usuario;
  categoria: Categoria;
  tipoCertificado: string;
  tituloCertificado: string;
  linkCertificado: string;
  descricaoCertificado: string;
  imagemCertificado: string;
  descricaoImagemCertificado: string;

  constructor(idCertificado: number, usuario: Usuario, categoria: Categoria, tipoCertificado: string,tituloCertificado: string, linkCertificado: string, descricaoCertificado: string,imagemCertificado: string, descricaoImagemCertificado: string) {
    
      this.idCertificado = idCertificado;
      this.usuario = usuario;
      this.categoria = categoria;
      this.tipoCertificado = tipoCertificado;
      this.tituloCertificado = tituloCertificado;
      this.linkCertificado = linkCertificado;
      this.descricaoCertificado = descricaoCertificado;
      this.imagemCertificado = imagemCertificado;
      this.descricaoImagemCertificado = descricaoImagemCertificado;
  }
}

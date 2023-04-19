export class Usuario {
  idUsuario: number;
  emailUsuario: string;
  senhaUsuario: string;
  nomeUsuario: string;
  tituloUsuario: string;
  curriculumVitaeUsuario: string;

  constructor(
    idUsuario: number,emailUsuario: string,senhaUsuario: string,nomeUsuario: string,tituloUsuario: string,curriculumVitaeUsuario: string
  ) {
    this.idUsuario = idUsuario;
    this.emailUsuario = emailUsuario;
    this.senhaUsuario = senhaUsuario;
    this.nomeUsuario = nomeUsuario;
    this.tituloUsuario = tituloUsuario;
    this.curriculumVitaeUsuario = curriculumVitaeUsuario;
  }

  toString(): string {
    return `Usuário:\n[id_usuario=${this.idUsuario},\nem_usuario=${this.emailUsuario},\nsn_usuario=${this.senhaUsuario},\nnm_usuario=${this.nomeUsuario},\ntt_usuario=${this.tituloUsuario},\ncv_usuario=${this.curriculumVitaeUsuario}\n]`;
  }
}

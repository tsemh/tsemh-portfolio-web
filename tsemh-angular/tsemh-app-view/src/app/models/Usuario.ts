class Usuario {
  idUsuario: number;
  emailUsuario: string;
  senhaUsuario: string;
  nomeUsuario: string;
  tituloUsuario: string;
  curriculumVitaeUsuario: string;

  constructor(idUsuario: number,emailUsuario: string,senhaUsuario: string,nomeUsuario: string,tituloUsuario: string,curriculumVitaeUsuario: string) {
      
    this.idUsuario = idUsuario;
    this.emailUsuario = emailUsuario;
    this.senhaUsuario = senhaUsuario;
    this.nomeUsuario = nomeUsuario;
    this.tituloUsuario = tituloUsuario;
    this.curriculumVitaeUsuario = curriculumVitaeUsuario;
  }
}
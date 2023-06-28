export class Usuario {
  id: number;
  email: string;
  senha: string;
  nome: string;
  titulo: string;
  curriculumVitae: string;

  constructor(
    id: number,email: string,senha: string,nome: string,titulo: string,curriculumVitae: string
  ) {
    this.id = id;
    this.email = email;
    this.senha = senha;
    this.nome = nome;
    this.titulo = titulo;
    this.curriculumVitae = curriculumVitae;
  }
}

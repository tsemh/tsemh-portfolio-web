export class Usuario {
  id: number;
  email: string;
  senha: string;
  nome: string;
  titulo: string;
  descricao: string;

  constructor(
    id: number,email: string, senha: string, nome: string, titulo: string, descricao: string
  ) {
    this.id = id;
    this.email = email;
    this.senha = senha;
    this.nome = nome;
    this.titulo = titulo;
    this.descricao = descricao;
  }
}

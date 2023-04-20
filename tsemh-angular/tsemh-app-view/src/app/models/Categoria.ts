import { Usuario } from "./usuariro";

export class Categoria {
    id: number;
    usuario: Usuario;
    tipo: string;
    titulo: string;
    link: string;

    constructor(id: number, usuario: Usuario, tipo: string, titulo: string, link: string) {
      
        this.id = id;
        this.usuario = usuario;
        this.tipo = tipo;
        this.titulo = titulo;
        this.link = link;
    }
}

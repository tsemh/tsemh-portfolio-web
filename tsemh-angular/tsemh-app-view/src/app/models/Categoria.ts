export class Categoria {
    idCategoria: number;
    usuario: Usuario;
    tipoCategoria: string;
    tituloCategoria: string;
    linkCategoria: string;

    constructor(idCategoria: number, usuario: Usuario, tipoCategoria: string, tituloCategoria: string, linkCategoria: string) {
      
        this.idCategoria = idCategoria;
        this.usuario = usuario;
        this.tipoCategoria = tipoCategoria;
        this.tituloCategoria = tituloCategoria;
        this.linkCategoria = linkCategoria;
    }
}

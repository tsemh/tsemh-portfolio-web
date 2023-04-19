import { Categoria } from "./Categoria";
import { Usuario } from "./usuariro";

class Formacao {
	idFormacao: number;
	usuario: Usuario;
	categoria: Categoria;
	tipoFormacao: string;
	tituloFormacao: string;
	linkFormacao: string;
	descricaoFormacao: string;
	imagemFormacao: string;
	descricaoImagemFormacao: string;

	constructor(idFormacao: number,usuario: Usuario,categoria: Categoria,tipoFormacao: string,tituloFormacao: string,linkFormacao: string,descricaoFormacao: string,imagemFormacao: string,descricaoImagemFormacao: string,) {
    
		this.idFormacao = idFormacao;
		this.usuario = usuario;
		this.categoria = categoria;
		this.tipoFormacao = tipoFormacao;
		this.tituloFormacao = tituloFormacao;
		this.linkFormacao = linkFormacao;
		this.descricaoFormacao = descricaoFormacao;
		this.imagemFormacao = imagemFormacao;
		this.descricaoImagemFormacao = descricaoImagemFormacao;
	}
}
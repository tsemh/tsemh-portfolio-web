package io.tsemh.tsemhapirest.entity;

import jakarta.persistence.*;

@Entity
@Table(name="tb_profissional")
public class Profissional {
	
	@Id
	@Column(name="id_profissional")
	@SequenceGenerator(name="profissional", sequenceName="sq_tb_profissional", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="profissional")
	private Integer id;
	
    @ManyToOne
    @JoinColumn(name="id_usuario")
	private Usuario usuario;
	
    @ManyToOne
    @JoinColumn(name="id_categoria")
	private Categoria categoria;
    
    @Column(name="tp_profisional")
	private String  tipo; //Tipo
    
    @Column(name="tt_profisional")
	private String  titulo; //Titulo
    
    @Column(name="lk_profissional")
	private String  link; //Link
    
    @Column(name="ds_profissional")
	private String  descricao; //Descrição
    
    @Column(name="img_profissional")
	private String  iimagem;
    
    @Column(name="ds_imagem_profissional")
	private String  descricaoImagem;
	
	public Profissional() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Profissional(Integer id, Usuario usuario, Categoria categoria, String tipo, String titulo, String link,
			String descricao, String iimagem, String descricaoImagem) {
		super();
		this.id = id;
		this.usuario = usuario;
		this.categoria = categoria;
		this.tipo = tipo;
		this.titulo = titulo;
		this.link = link;
		this.descricao = descricao;
		this.iimagem = iimagem;
		this.descricaoImagem = descricaoImagem;
	}



	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public Usuario getUsuario() {
		return usuario;
	}



	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}



	public Categoria getCategoria() {
		return categoria;
	}



	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}



	public String getTipo() {
		return tipo;
	}



	public void setTipo(String tipo) {
		this.tipo = tipo;
	}



	public String getTitulo() {
		return titulo;
	}



	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}



	public String getLink() {
		return link;
	}



	public void setLink(String link) {
		this.link = link;
	}



	public String getDescricao() {
		return descricao;
	}



	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}



	public String getIimagem() {
		return iimagem;
	}



	public void setIimagem(String iimagem) {
		this.iimagem = iimagem;
	}



	public String getDescricaoImagem() {
		return descricaoImagem;
	}



	public void setDescricaoImagem(String descricaoImagem) {
		this.descricaoImagem = descricaoImagem;
	}



	@Override
	public String toString() {
		return "Profissional:\n[id_profissional   =" +id      +  ",\n"
							+"usuario          	  =" +usuario       	   +  ",\n"
							+"categoria           =" +categoria		   +  ",\n"
							+"tp_profissional     =" +tipo      +  ",\n"
							+"ds_profissional     =" +descricao    +  ",\n"
							+"im_profissional     =" +iimagem   +  ",\n"
							+"di_profissional     =" +descricaoImagem      +  ",\n"
				+"]";
	}
}
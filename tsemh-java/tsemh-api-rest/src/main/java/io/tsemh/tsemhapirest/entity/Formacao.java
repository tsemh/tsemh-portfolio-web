package io.tsemh.tsemhapirest.entity;

import jakarta.persistence.*;

@Entity
@Table(name="tb_formacao")
public class Formacao {
	
	@Id
	@Column(name="id_formacao")
	@SequenceGenerator(name="formacao", sequenceName="sq_tb_formacao", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="formacao")
	private Integer id;
	
    @ManyToOne
    @JoinColumn(name="id_usuario")
	private Usuario usuario;
	
    @ManyToOne
    @JoinColumn(name="id_categoria")
	private Categoria categoria;
    
    @Column(name="tp_formacao")
	private String 	tipo; //Tipo
    
    @Column(name="tt_formacao")
	private String  titulo; //Titulo
    
    @Column(name="lk_foramcao")
	private String  link; //Link
    
    @Column(name="ds_formacao")
	private String 	descricao; //Descrição
    
    @Column(name="img_formacao")
	private String  imagem;
    
    @Column(name="ds_imagem_formacao")
	private String  descricaoImagem;
    
	public Formacao() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Formacao(Integer id, Usuario usuario, Categoria categoria, String tipo, String titulo, String link,
			String descricao, String imagem, String descricaoImagem) {
		super();
		this.id = id;
		this.usuario = usuario;
		this.categoria = categoria;
		this.tipo = tipo;
		this.titulo = titulo;
		this.link = link;
		this.descricao = descricao;
		this.imagem = imagem;
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



	public String getImagem() {
		return imagem;
	}



	public void setImagem(String imagem) {
		this.imagem = imagem;
	}



	public String getDescricaoImagem() {
		return descricaoImagem;
	}



	public void setDescricaoImagem(String descricaoImagem) {
		this.descricaoImagem = descricaoImagem;
	}



	@Override
	public String toString() {
		return "Formacao:\n[id_formacao   =" +id     +  ",\n"
						+"id_usuario      =" +usuario          +  ",\n"
						+"id_categoria    =" +categoria        +  ",\n"
						+"tp_formacao     =" +tipo      +  ",\n"
						+"ds_formacao     =" +descricao      +  ",\n"
						+"img_formacao    =" +imagem      +  ",\n"
						+"ds_img_formacao =" +descricaoImagem     +  ",\n"
				+"]";
	}

}

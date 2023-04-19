package io.tsemh.tsemhapirest.entity;

import jakarta.persistence.*;

@Entity
@Table(name="tb_postagem")
public class Postagem {
	
	@Id
	@Column(name="id_postagem")
	@SequenceGenerator(name="postagem", sequenceName="sq_tb_postagem", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="postagem")
	private Integer id;
	
    @ManyToOne
    @JoinColumn(name="id_usuario")
	private Usuario usuario;
	
    @ManyToOne
    @JoinColumn(name="id_categoria")
	private Categoria categoria;

    @Column(name="tp_postagem")
	private String  tipo; //tipo
    
    @Column(name="tt_postagem")
	private String  titulo; //titulo
    
    @Column(name="lk_postagem")
	private String  link; //link
    
    @Column(name="ds_postagem")
	private String  descricao; //descrição
    
    @Column(name="img_postagem")
	private String  imagem;
    
    @Column(name="ds_imagem_postagem")
	private String  descricaoImagem;
		
	public Postagem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Postagem(Integer id, Usuario usuario, Categoria categoria, String tipo, String titulo, String link,
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
		return "Postagem:\n[id_postagem   =" +id    +  ",\n"
						+"id_usuario      =" +usuario          +  ",\n"
						+"id_categoria    =" +categoria        +  ",\n"
						+"tp_formacao     =" +tipo     +  ",\n"
						+"ds_formacao     =" +descricao      +  ",\n"
						+"img_formacao    =" +imagem      +  ",\n"
						+"ds_img_formacao =" +descricaoImagem      +  ",\n"
				+"]";
	}
}
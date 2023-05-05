package io.tsemh.tsemhapirest.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
@Table(name="tb_registro")
public class Registro {
	
	@Id
	@Column(name="id_registro")
	@SequenceGenerator(name="registro", sequenceName="sq_tb_registro", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="registro")
	private long id;
	
	@ManyToOne
	@JoinColumn(name="usuario")
	private Usuario usuario;
	
	@ManyToOne
	@JoinColumn(name="categoria")
	private Categoria categoria;
	
	@Column(name="tp_registro")
	private String tipo;
	
	@Column(name="nm_registro")
	private String nome;
	
	@Column(name="lk_registro")
	private String link;
	
	@Column(name="ds_registro")
	private String descricao;
	
	@Column(name="im_registro")
	private String imagem;
	
	@Column(name="ds_im_registro")
	private String descricaoImagem;

	public Registro() {
	}

	public Registro(long id, Usuario usuario, Categoria categoria, String tipo, String nome, String link,
			String descricao, String imagem, String descricaoImagemRegistro) {
		super();
		this.id = id;
		this.usuario = usuario;
		this.categoria = categoria;
		this.tipo = tipo;
		this.nome = nome;
		this.link = link;
		this.descricao = descricao;
		this.imagem = imagem;
		this.descricaoImagem = descricaoImagemRegistro;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@JsonBackReference
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

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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

	public String getDescricaoImagemRegistro() {
		return descricaoImagem;
	}

	public void setDescricaoImagem(String descricaoImagem) {
		this.descricaoImagem = descricaoImagem;
	}


}

package io.tsemh.tsemhapirest.entity;

import jakarta.persistence.*;

@Entity
@Table(name="tb_postagem")
public class Postagem {
	
	@Id
	@Column(name="id_postagem")
	@SequenceGenerator(name="postagem", sequenceName="sq_tb_postagem", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="postagem")
	private Integer idPostagem;
	
    @ManyToOne
    @JoinColumn(name="id_usuario")
	private Usuario usuario;
	
    @ManyToOne
    @JoinColumn(name="id_categoria")
	private Categoria categoria;

    @Column(name="tp_postagem")
	private String  tipoPostagem; //tipo
    
    @Column(name="tt_postagem")
	private String  tituloPostagem; //titulo
    
    @Column(name="lk_postagem")
	private String  linkPostagem; //link
    
    @Column(name="ds_postagem")
	private String  descricaoPostagem; //descrição
    
    @Column(name="img_postagem")
	private String  imagemPostagem;
    
    @Column(name="ds_imagem_postagem")
	private String  descricaoImagemPostagem;
		
	public Postagem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Postagem(Integer idPostagem, Usuario usuario, Categoria categoria, String tipoPostagem,
			String tituloPostagem, String linkPostagem, String descricaoPostagem, String imagemPostagem,
			String descricaoImagemPostagem) {
		super();
		this.idPostagem = idPostagem;
		this.usuario = usuario;
		this.categoria = categoria;
		this.tipoPostagem = tipoPostagem;
		this.tituloPostagem = tituloPostagem;
		this.linkPostagem = linkPostagem;
		this.descricaoPostagem = descricaoPostagem;
		this.imagemPostagem = imagemPostagem;
		this.descricaoImagemPostagem = descricaoImagemPostagem;
	}

	public Integer getIdPostagem() {
		return idPostagem;
	}

	public void setIdPostagem(Integer idPostagem) {
		this.idPostagem = idPostagem;
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

	public String getTipoPostagem() {
		return tipoPostagem;
	}

	public void setTipoPostagem(String tipoPostagem) {
		this.tipoPostagem = tipoPostagem;
	}

	public String getTituloPostagem() {
		return tituloPostagem;
	}

	public void setTituloPostagem(String tituloPostagem) {
		this.tituloPostagem = tituloPostagem;
	}

	public String getLinkPostagem() {
		return linkPostagem;
	}

	public void setLinkPostagem(String linkPostagem) {
		this.linkPostagem = linkPostagem;
	}

	public String getDescricaoPostagem() {
		return descricaoPostagem;
	}

	public void setDescricaoPostagem(String descricaoPostagem) {
		this.descricaoPostagem = descricaoPostagem;
	}

	public String getImagemPostagem() {
		return imagemPostagem;
	}

	public void setImagemPostagem(String imagemPostagem) {
		this.imagemPostagem = imagemPostagem;
	}

	public String getDescricaoImagemPostagem() {
		return descricaoImagemPostagem;
	}

	public void setDescricaoImagemPostagem(String descricaoImagemPostagem) {
		this.descricaoImagemPostagem = descricaoImagemPostagem;
	}

	@Override
	public String toString() {
		return "Postagem:\n[id_postagem   =" +idPostagem      +  ",\n"
						+"id_usuario      =" +usuario          +  ",\n"
						+"id_categoria    =" +categoria        +  ",\n"
						+"tp_formacao     =" +tipoPostagem      +  ",\n"
						+"ds_formacao     =" +descricaoPostagem      +  ",\n"
						+"img_formacao    =" +imagemPostagem      +  ",\n"
						+"ds_img_formacao =" +descricaoImagemPostagem      +  ",\n"
				+"]";
	}
}
package io.tsemh.tsemhapirest.entity;

import jakarta.persistence.*;

@Entity
@Table(name="tb_formacao")
public class Formacao {
	
	@Id
	@Column(name="id_formacao")
	@SequenceGenerator(name="formacao", sequenceName="sq_tb_formacao", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="formacao")
	private Integer idFormacao;
	
    @ManyToOne
    @JoinColumn(name="id_usuario")
	private Usuario usuario;
	
    @ManyToOne
    @JoinColumn(name="id_categoria")
	private Categoria categoria;
    
    @Column(name="tp_formacao")
	private String 	tipoFormacao; //Tipo
    
    @Column(name="tt_formacao")
	private String  tituloFormacao; //Titulo
    
    @Column(name="lk_foramcao")
	private String  linkFormacao; //Link
    
    @Column(name="ds_formacao")
	private String 	descricaoFormacao; //Descrição
    
    @Column(name="img_formacao")
	private String  imagemFormacao;
    
    @Column(name="ds_imagem_formacao")
	private String  descricaoImagemFormacao;
    
	public Formacao() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Formacao(Integer idFormacao, Usuario usuario, Categoria categoria, String tipoFormacao,
			String tituloFormacao, String linkFormacao, String descricaoFormacao, String imagemFormacao,
			String descricaoImagemFormacao) {
		super();
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

	public Integer getIdFormacao() {
		return idFormacao;
	}

	public void setIdFormacao(Integer idFormacao) {
		this.idFormacao = idFormacao;
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

	public String getTipoFormacao() {
		return tipoFormacao;
	}

	public void setTipoFormacao(String tipoFormacao) {
		this.tipoFormacao = tipoFormacao;
	}

	public String getTituloFormacao() {
		return tituloFormacao;
	}

	public void setTituloFormacao(String tituloFormacao) {
		this.tituloFormacao = tituloFormacao;
	}

	public String getLinkFormacao() {
		return linkFormacao;
	}

	public void setLinkFormacao(String linkFormacao) {
		this.linkFormacao = linkFormacao;
	}

	public String getDescricaoFormacao() {
		return descricaoFormacao;
	}

	public void setDescricaoFormacao(String descricaoFormacao) {
		this.descricaoFormacao = descricaoFormacao;
	}

	public String getImagemFormacao() {
		return imagemFormacao;
	}

	public void setImagemFormacao(String imagemFormacao) {
		this.imagemFormacao = imagemFormacao;
	}

	public String getDescricaoImagemFormacao() {
		return descricaoImagemFormacao;
	}

	public void setDescricaoImagemFormacao(String descricaoImagemFormacao) {
		this.descricaoImagemFormacao = descricaoImagemFormacao;
	}

	@Override
	public String toString() {
		return "Formacao:\n[id_formacao   =" +idFormacao      +  ",\n"
						+"id_usuario      =" +usuario          +  ",\n"
						+"id_categoria    =" +categoria        +  ",\n"
						+"tp_formacao     =" +tipoFormacao      +  ",\n"
						+"ds_formacao     =" +descricaoFormacao      +  ",\n"
						+"img_formacao    =" +imagemFormacao      +  ",\n"
						+"ds_img_formacao =" +descricaoImagemFormacao      +  ",\n"
				+"]";
	}

}

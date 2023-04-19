package io.tsemh.tsemhapirest.entity;

import jakarta.persistence.*;

@Entity
@Table(name="tb_certificado")
public class Certificado {
	
	@Id
	@Column(name="id_certificado")
	@SequenceGenerator(name="certificado", sequenceName="sq_tb_certificado", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="certificado")
	private Integer id;
	
    @ManyToOne
    @JoinColumn(name="id_usuario")
	private Usuario usuario;
	
    @ManyToOne
    @JoinColumn(name="id_categoria")
	private Categoria categoria;
    
    @Column(name="tp_certificado")
	private String  tipo;	//Tipo
	
    @Column(name="tt_certificado")
	private String  titulo;	//Titulo
    
    @Column(name="lk_certificado")
	private String  link; //Link
    
    @Column(name="ds_certificado")
	private String  descricao; //Descrição
    
    @Column(name="img_Certificado")
	private String  imagem; //Imagem
    
    @Column(name="ds_imagem_certificado")
	private String  descricaoImagem; //Descrição Imagem

	public Certificado() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Certificado(Integer id, Usuario usuario, Categoria categoria, String tipo, String titulo, String link,
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
		return "Certificado:\n[id_certificado   ="  +id   + ",\n"
						   +"usuario         ="  +usuario        + ",\n"
						   +"categoria       ="  +categoria      + ",\n"
						   +"tp_certificado     ="  +tipo    + ",\n"
						   +"tt_certificado     ="  +titulo    + ",\n"
						   +"lk_certificado     ="  +link    + ",\n"
						   +"ds_certificado     ="  +descricao    + ",\n"
						   +"im_certificado    	="  +imagem   + ",\n"
						   +"di_certificado 	="  +descricaoImagem   + ",\n"
				+"]";
	}
}
	

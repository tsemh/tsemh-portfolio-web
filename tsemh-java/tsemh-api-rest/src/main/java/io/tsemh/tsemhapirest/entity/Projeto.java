package io.tsemh.tsemhapirest.entity;

import jakarta.persistence.*;

@Entity
@Table(name="tb_projeto")
public class Projeto {
	
	@Id
	@Column(name="id_projeto")
	@SequenceGenerator(name="projeto", sequenceName="sq_tb_projeto", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="projeto")
	private Integer id;
	
    @ManyToOne
    @JoinColumn(name="usuario")
	private Usuario usuario;
	
    @ManyToOne
    @JoinColumn(name="id_categoria")
	private Categoria categoria;
    
    @Column(name="tp_projeto")
	private String  tipo;	//tipo
    
    @Column(name="tt_projeto")
	private String  titulo;	//titulo
    
    @Column(name="lk_projeto")
	private String  link;	//link
    
    @Column(name="ds_projeto")
	private String  descricao;	//descrição
    
    @Column(name="im_projeto")
	private String  iimagem;
    
    @Column(name="di_projeto")
	private String  descricaoimagem;
	
	public Projeto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Projeto(Integer id, Usuario usuario, Categoria categoria, String tipo, String titulo, String link,
			String descricao, String iimagem, String descricaoimagem) {
		super();
		this.id = id;
		this.usuario = usuario;
		this.categoria = categoria;
		this.tipo = tipo;
		this.titulo = titulo;
		this.link = link;
		this.descricao = descricao;
		this.iimagem = iimagem;
		this.descricaoimagem = descricaoimagem;
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



	public String getDescricaoimagem() {
		return descricaoimagem;
	}



	public void setDescricaoimagem(String descricaoimagem) {
		this.descricaoimagem = descricaoimagem;
	}



	@Override
	public String toString() {
		return "Projeto:\n[id_formacao   	  =" +id      +  ",\n"
							+"id_usuario      =" +usuario      +  ",\n"
							+"id_categoria    =" +categoria	  +  ",\n"
							+"tp_formacao     =" +tipo      +  ",\n"
							+"ds_formacao     =" +descricao  +  ",\n"
							+"im_formacao     =" +iimagem    +  ",\n"
							+"di_formacao     =" +descricaoimagem    +  ",\n"
				+"]";
	}
}
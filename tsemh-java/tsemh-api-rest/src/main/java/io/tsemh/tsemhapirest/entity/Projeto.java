package io.tsemh.tsemhapirest.entity;

import jakarta.persistence.*;

@Entity
@Table(name="tb_projeto")
public class Projeto {
	
	@Id
	@Column(name="id_projeto")
	@SequenceGenerator(name="projeto", sequenceName="sq_tb_projeto", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="projeto")
	private Integer idProjeto;
	
    @ManyToOne
    @JoinColumn(name="usuario")
	private Usuario usuario;
	
    @ManyToOne
    @JoinColumn(name="id_categoria")
	private Categoria categoria;
    
    @Column(name="tp_projeto")
	private String  tipoProjeto;	//tipo
    
    @Column(name="tt_projeto")
	private String  tituloProjeto;	//titulo
    
    @Column(name="lk_projeto")
	private String  linkProjeto;	//link
    
    @Column(name="ds_projeto")
	private String  descricaoProjeto;	//descrição
    
    @Column(name="im_projeto")
	private String  iimagemProjeto;
    
    @Column(name="di_projeto")
	private String  descricaoimagemProjeto;
	
	public Projeto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Projeto(Integer idProjeto, Usuario usuario, Categoria categoria, String tipoProjeto, String tituloProjeto,
			String linkProjeto, String descricaoProjeto, String iimagemProjeto, String descricaoimagemProjeto) {
		super();
		this.idProjeto = idProjeto;
		this.usuario = usuario;
		this.categoria = categoria;
		this.tipoProjeto = tipoProjeto;
		this.tituloProjeto = tituloProjeto;
		this.linkProjeto = linkProjeto;
		this.descricaoProjeto = descricaoProjeto;
		this.iimagemProjeto = iimagemProjeto;
		this.descricaoimagemProjeto = descricaoimagemProjeto;
	}

	public Integer getIdProjeto() {
		return idProjeto;
	}

	public void setIdProjeto(Integer idProjeto) {
		this.idProjeto = idProjeto;
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

	public String getTipoProjeto() {
		return tipoProjeto;
	}

	public void setTipoProjeto(String tipoProjeto) {
		this.tipoProjeto = tipoProjeto;
	}

	public String getTituloProjeto() {
		return tituloProjeto;
	}

	public void setTituloProjeto(String tituloProjeto) {
		this.tituloProjeto = tituloProjeto;
	}

	public String getLinkProjeto() {
		return linkProjeto;
	}

	public void setLinkProjeto(String linkProjeto) {
		this.linkProjeto = linkProjeto;
	}

	public String getDescricaoProjeto() {
		return descricaoProjeto;
	}

	public void setDescricaoProjeto(String descricaoProjeto) {
		this.descricaoProjeto = descricaoProjeto;
	}

	public String getIimagemProjeto() {
		return iimagemProjeto;
	}

	public void setIimagemProjeto(String iimagemProjeto) {
		this.iimagemProjeto = iimagemProjeto;
	}

	public String getDescricaoimagemProjeto() {
		return descricaoimagemProjeto;
	}

	public void setDescricaoimagemProjeto(String descricaoimagemProjeto) {
		this.descricaoimagemProjeto = descricaoimagemProjeto;
	}

	@Override
	public String toString() {
		return "Projeto:\n[id_formacao   	  =" +idProjeto      +  ",\n"
							+"id_usuario      =" +usuario      +  ",\n"
							+"id_categoria    =" +categoria	  +  ",\n"
							+"tp_formacao     =" +tipoProjeto      +  ",\n"
							+"ds_formacao     =" +descricaoProjeto      +  ",\n"
							+"im_formacao     =" +iimagemProjeto      +  ",\n"
							+"di_formacao     =" +descricaoimagemProjeto      +  ",\n"
				+"]";
	}
}
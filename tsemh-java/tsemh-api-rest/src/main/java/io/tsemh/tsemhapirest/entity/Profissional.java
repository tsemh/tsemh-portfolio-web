package io.tsemh.tsemhapirest.entity;

import jakarta.persistence.*;

@Entity
@Table(name="tb_profissional")
public class Profissional {
	
	@Id
	@Column(name="id_profissional")
	@SequenceGenerator(name="profissional", sequenceName="sq_tb_profissional", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="profissional")
	private Integer idProfissional;
	
    @ManyToOne
    @JoinColumn(name="id_usuario")
	private Usuario usuario;
	
    @ManyToOne
    @JoinColumn(name="id_categoria")
	private Categoria categoria;
    
    @Column(name="tp_profisional")
	private String  tipoProfissional; //Tipo
    
    @Column(name="tt_profisional")
	private String  tituloProfissional; //Titulo
    
    @Column(name="lk_profissional")
	private String  linkProfissional; //Link
    
    @Column(name="ds_profissional")
	private String  descricaoProfissional; //Descrição
    
    @Column(name="img_profissional")
	private String  iimagemProfissional;
    
    @Column(name="ds_imagem_profissional")
	private String  descricaoImagemProfissional;
	
	public Profissional() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Profissional(Integer idProfissional, Usuario usuario, Categoria categoria, String tipoProfissional,
			String tituloProfissional, String linkProfissional, String descricaoProfissional,
			String iimagemProfissional, String descricaoImagemProfissional) {
		super();
		this.idProfissional = idProfissional;
		this.usuario = usuario;
		this.categoria = categoria;
		this.tipoProfissional = tipoProfissional;
		this.tituloProfissional = tituloProfissional;
		this.linkProfissional = linkProfissional;
		this.descricaoProfissional = descricaoProfissional;
		this.iimagemProfissional = iimagemProfissional;
		this.descricaoImagemProfissional = descricaoImagemProfissional;
	}

	public Integer getIdProfissional() {
		return idProfissional;
	}

	public void setIdProfissional(Integer idProfissional) {
		this.idProfissional = idProfissional;
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

	public String getTipoProfissional() {
		return tipoProfissional;
	}

	public void setTipoProfissional(String tipoProfissional) {
		this.tipoProfissional = tipoProfissional;
	}

	public String getTituloProfissional() {
		return tituloProfissional;
	}

	public void setTituloProfissional(String tituloProfissional) {
		this.tituloProfissional = tituloProfissional;
	}

	public String getLinkProfissional() {
		return linkProfissional;
	}

	public void setLinkProfissional(String linkProfissional) {
		this.linkProfissional = linkProfissional;
	}

	public String getDescricaoProfissional() {
		return descricaoProfissional;
	}

	public void setDescricaoProfissional(String descricaoProfissional) {
		this.descricaoProfissional = descricaoProfissional;
	}

	public String getIimagemProfissional() {
		return iimagemProfissional;
	}

	public void setIimagemProfissional(String iimagemProfissional) {
		this.iimagemProfissional = iimagemProfissional;
	}

	public String getDescricaoImagemProfissional() {
		return descricaoImagemProfissional;
	}

	public void setDescricaoImagemProfissional(String descricaoImagemProfissional) {
		this.descricaoImagemProfissional = descricaoImagemProfissional;
	}

	@Override
	public String toString() {
		return "Profissional:\n[id_profissional   =" +idProfissional      +  ",\n"
							+"usuario          	  =" +usuario       	   +  ",\n"
							+"categoria           =" +categoria		   +  ",\n"
							+"tp_profissional     =" +tipoProfissional      +  ",\n"
							+"ds_profissional     =" +descricaoProfissional      +  ",\n"
							+"im_profissional     =" +iimagemProfissional      +  ",\n"
							+"di_profissional     =" +descricaoImagemProfissional      +  ",\n"
				+"]";
	}
}
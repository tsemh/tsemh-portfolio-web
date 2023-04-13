package io.tsemh.tsemhapirest.entity;

import jakarta.persistence.*;

@Entity
@Table(name="tb_certificado")
public class Certificado {
	
	@Id
	@Column(name="id_certificado")
	@SequenceGenerator(name="certificado", sequenceName="sq_tb_certificado", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="certificado")
	private Integer idCertificado;
	
    @ManyToOne
    @JoinColumn(name="id_usuario")
	private Usuario usuario;
	
    @ManyToOne
    @JoinColumn(name="id_categoria")
	private Categoria categoria;
    
    @Column(name="tp_certificado")
	private String  tipoCertificado;	//Tipo
	
    @Column(name="tt_certificado")
	private String  tituloCertificado;	//Titulo
    
    @Column(name="lk_certificado")
	private String  linkCertificado; //Link
    
    @Column(name="ds_certificado")
	private String  descricaoCertificado; //Descrição
    
    @Column(name="img_Certificado")
	private String  imagemCertificado; //Imagem
    
    @Column(name="ds_imagem_certificado")
	private String  descricaoImagemCertificado; //Descrição Imagem

	public Certificado() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Certificado(Integer idCertificado, Usuario usuario, Categoria categoria, String tipoCertificado,
			String tituloCertificado, String linkCertificado, String descricaoCertificado, String imagemCertificado,
			String descricaoImagemCertificado) {
		super();
		this.idCertificado = idCertificado;
		this.usuario = usuario;
		this.categoria = categoria;
		this.tipoCertificado = tipoCertificado;
		this.tituloCertificado = tituloCertificado;
		this.linkCertificado = linkCertificado;
		this.descricaoCertificado = descricaoCertificado;
		this.imagemCertificado = imagemCertificado;
		this.descricaoImagemCertificado = descricaoImagemCertificado;
	}

	public Integer getIdCertificado() {
		return idCertificado;
	}

	public void setIdCertificado(Integer idCertificado) {
		this.idCertificado = idCertificado;
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

	public String getTipoCertificado() {
		return tipoCertificado;
	}

	public void setTipoCertificado(String tipoCertificado) {
		this.tipoCertificado = tipoCertificado;
	}

	public String getTituloCertificado() {
		return tituloCertificado;
	}

	public void setTituloCertificado(String tituloCertificado) {
		this.tituloCertificado = tituloCertificado;
	}

	public String getLinkCertificado() {
		return linkCertificado;
	}

	public void setLinkCertificado(String linkCertificado) {
		this.linkCertificado = linkCertificado;
	}

	public String getDescricaoCertificado() {
		return descricaoCertificado;
	}

	public void setDescricaoCertificado(String descricaoCertificado) {
		this.descricaoCertificado = descricaoCertificado;
	}

	public String getImagemCertificado() {
		return imagemCertificado;
	}

	public void setImagemCertificado(String imagemCertificado) {
		this.imagemCertificado = imagemCertificado;
	}

	public String getDescricaoImagemCertificado() {
		return descricaoImagemCertificado;
	}

	public void setDescricaoImagemCertificado(String descricaoImagemCertificado) {
		this.descricaoImagemCertificado = descricaoImagemCertificado;
	}

	@Override
	public String toString() {
		return "Certificado:\n[id_certificado   ="  +idCertificado    + ",\n"
						   +"usuario         ="  +usuario        + ",\n"
						   +"categoria       ="  +categoria      + ",\n"
						   +"tp_certificado     ="  +tipoCertificado    + ",\n"
						   +"tt_certificado     ="  +tituloCertificado    + ",\n"
						   +"lk_certificado     ="  +linkCertificado    + ",\n"
						   +"ds_certificado     ="  +descricaoCertificado    + ",\n"
						   +"im_certificado    	="  +imagemCertificado    + ",\n"
						   +"di_certificado 	="  +descricaoImagemCertificado	   + ",\n"
				+"]";
	}
}
	

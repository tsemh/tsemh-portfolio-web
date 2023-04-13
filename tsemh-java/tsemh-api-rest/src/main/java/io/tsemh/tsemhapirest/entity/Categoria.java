package io.tsemh.tsemhapirest.entity;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name="tb_categoria")
public class Categoria {

	@Id
	@Column(name="id_categoira")
	@SequenceGenerator(name="categoria", sequenceName="sq_tb_categoria", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="categoria")
	private Integer idCategoria;
	
    @ManyToOne
    @JoinColumn(name="id_usuario")
	private Usuario usuario;
	
	@Column(name="tp_categoria",nullable=false, length=50)
	private String  tipoCategoria; //tipo
	
	@Column(name="tt_categoria",nullable=false, length=50)
	private String  tituloCategoria; //titulo
	
	@Column(name="lk_categoria",nullable=false)
	private String  linkCategoria; //link

	public Categoria() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Categoria(Integer idCategoria, Usuario usuario, String tipoCategoria, String tituloCategoria,
			String linkCategoria, List<Certificado> certificados, List<Formacao> formacoes, List<Postagem> postagens,
			List<Profissional> profissionais, List<Projeto> projetos) {
		super();
		this.idCategoria = idCategoria;
		this.usuario = usuario;
		this.tipoCategoria = tipoCategoria;
		this.tituloCategoria = tituloCategoria;
		this.linkCategoria = linkCategoria;
	}

	public Integer getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(Integer idCategoria) {
		this.idCategoria = idCategoria;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getTipoCategoria() {
		return tipoCategoria;
	}

	public void setTipoCategoria(String tipoCategoria) {
		this.tipoCategoria = tipoCategoria;
	}

	public String getTituloCategoria() {
		return tituloCategoria;
	}

	public void setTituloCategoria(String tituloCategoria) {
		this.tituloCategoria = tituloCategoria;
	}

	public String getLinkCategoria() {
		return linkCategoria;
	}

	public void setLinkCategoria(String linkCategoria) {
		this.linkCategoria = linkCategoria;
	}

	@Override
	public String toString() {
		return "Categoria:\n[id_categoria = "+idCategoria+",\n"
						  +" usuario   = "+usuario  +",\n"
						  +" tp_categoria = "+tipoCategoria+",\n"
					      +" tt_categoria = "+tituloCategoria+",\n"
					      +" lk_categoria = "+linkCategoria+"  ]";
	}
	
}

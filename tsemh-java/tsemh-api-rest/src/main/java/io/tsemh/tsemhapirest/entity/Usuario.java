package io.tsemh.tsemhapirest.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name="tb_usuario")
public class Usuario {
	
	@Id
	@Column(name="id_usuario")
	@SequenceGenerator(name="usuario", sequenceName="sq_tb_usuario", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="usuario")
	private Integer idUsuario;
	
	@Column(name="em_usuario")
	private String  emailUsuario;
	
	@Column(name="sn_usuario")
	private String  senhaUsuario;
	
	@Column(name="nm_usuario")
	private String  nomeUsuario;
	
	@Column(name="tt_usuario")
	private String  tituloUsuario;
	
	@Column(name="cv_usuario")
	private String  curriculumVitaeUsuario;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "usuario", fetch = FetchType.LAZY)
	private List<Categoria> categorias;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "usuario", fetch = FetchType.LAZY)
	private List<Registro> registros;

	public Usuario() {	
		super();
		// TODO Auto-generated constructor stub
	}

	public Usuario(Integer idUsuario, String emailUsuario, String senhaUsuario, String nomeUsuario,
			String tituloUsuario, String curriculumVitaeUsuario, List<Categoria> categorias, List<Registro> registros) {
		super();
		this.idUsuario = idUsuario;
		this.emailUsuario = emailUsuario;
		this.senhaUsuario = senhaUsuario;
		this.nomeUsuario = nomeUsuario;
		this.tituloUsuario = tituloUsuario;
		this.curriculumVitaeUsuario = curriculumVitaeUsuario;
		this.categorias = categorias;
		this.registros = registros;
	}

	public Integer getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getEmailUsuario() {
		return emailUsuario;
	}

	public void setEmailUsuario(String emailUsuario) {
		this.emailUsuario = emailUsuario;
	}

	public String getSenhaUsuario() {
		return senhaUsuario;
	}

	public void setSenhaUsuario(String senhaUsuario) {
		this.senhaUsuario = senhaUsuario;
	}

	public String getNomeUsuario() {
		return nomeUsuario;
	}

	public void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
	}

	public String getTituloUsuario() {
		return tituloUsuario;
	}

	public void setTituloUsuario(String tituloUsuario) {
		this.tituloUsuario = tituloUsuario;
	}

	public String getCurriculumVitaeUsuario() {
		return curriculumVitaeUsuario;
	}

	public void setCurriculumVitaeUsuario(String curriculumVitaeUsuario) {
		this.curriculumVitaeUsuario = curriculumVitaeUsuario;
	}

	@JsonManagedReference
	public List<Categoria> getCategorias() {
		return categorias;
	}

	public void setCategorias(List<Categoria> categorias) {
		this.categorias = categorias;
	}

	@JsonManagedReference
	public List<Registro> getRegistros() {
		return registros;
	}

	public void setRegistros(List<Registro> registros) {
		this.registros = registros;
	}

	@Override
	public String toString() {
		return "Usuário:\n[id_usuario    =" +idUsuario  +  ",\n"
							+"em_usuario =" +emailUsuario	 +  ",\n"
							+"sn_usuario =" +senhaUsuario  +  ",\n"
							+"nm_usuario =" +nomeUsuario  +  ",\n"
							+"tt_usuario =" +tituloUsuario  +  ",\n"
							+"cv_usuario =" +curriculumVitaeUsuario  +  ",\n"

				+"]";
	}

}
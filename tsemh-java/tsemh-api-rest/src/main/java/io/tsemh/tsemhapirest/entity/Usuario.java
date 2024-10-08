package io.tsemh.tsemhapirest.entity;

import java.util.List;
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
	private String  emailUsuario;	//email
	
	@Column(name="sn_usuario")
	private String  senhaUsuario;	//senha
	
	@Column(name="nm_usuario")
	private String  nomeUsuario;	//nome
	
	@Column(name="tt_usuario")
	private String  tituloUsuario;	//titulo
	
	@Column(name="cv_usuario")
	private String  curriculumVitaeUsuario;	//Curriculum Vitae

	public Usuario() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Usuario(Integer idUsuario, String emailUsuario, String senhaUsuario, String nomeUsuario,
			String tituloUsuario, String contatoUsuario, String curriculumVitaeUsuario, List<Categoria> categorias,
			List<Certificado> certificados, List<Formacao> formacoes, List<Postagem> postagens,
			List<Profissional> profissionais, List<Projeto> projetos) {
		super();
		this.idUsuario = idUsuario;
		this.emailUsuario = emailUsuario;
		this.senhaUsuario = senhaUsuario;
		this.nomeUsuario = nomeUsuario;
		this.tituloUsuario = tituloUsuario;
		this.curriculumVitaeUsuario = curriculumVitaeUsuario;
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
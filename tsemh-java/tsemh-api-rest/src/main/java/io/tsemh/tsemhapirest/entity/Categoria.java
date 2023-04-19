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
	private Integer id;
	
    @ManyToOne
    @JoinColumn(name="id_usuario")
	private Usuario usuario;
	
	@Column(name="tp_categoria",nullable=false, length=50)
	private String  tipo;
	
	@Column(name="tt_categoria",nullable=false, length=50)
	private String  titulo;
	
	@Column(name="lk_categoria",nullable=false)
	private String  link;

	public Categoria() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Categoria(Integer id, Usuario usuario, String tipo, String titulo, String link) {
		super();
		this.id = id;
		this.usuario = usuario;
		this.tipo = tipo;
		this.titulo = titulo;
		this.link = link;
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

	@Override
	public String toString() {
		return "Categoria:\n[id_categoria = "+id+",\n"
						  +" usuario   = "+usuario  +",\n"
						  +" tp_categoria = "+tipo+",\n"
					      +" tt_categoria = "+titulo+",\n"
					      +" lk_categoria = "+link+"  ]";
	}
	
}

package io.tsemh.tsemhapirest.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name="tb_usuario")
public class Usuario {
    
    @Id
    @Column(name="id_usuario")
    @SequenceGenerator(name="usuario", sequenceName="sq_tb_usuario", allocationSize=1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE,generator="usuario")
    private long id;
    
    @Column(name="em_usuario")
    private String  email;
    
    @Column(name="sn_usuario")
    private String  senha;
    
    @Column(name="nm_usuario")
    private String  nome;
    
    @Column(name="tt_usuario")
    private String  titulo;
    
    @Column(name="cv_usuario")
    private String  curriculumVitae;
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "usuario", fetch = FetchType.LAZY)
    private List<Categoria> categorias = new ArrayList<>();
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "usuario", fetch = FetchType.LAZY)
    private List<Registro> registros = new ArrayList<>();

    public Usuario() {    
    }

    public Usuario(Integer id, String email, String senha, String nome, String titulo, String curriculumVitae,
            List<Categoria> categorias, List<Registro> registros) {
        this.id = id;
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.titulo = titulo;
        this.curriculumVitae = curriculumVitae;
        this.categorias = categorias;
        this.registros = registros;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getCurriculumVitae() {
        return curriculumVitae;
    }

    public void setCurriculumVitae(String curriculumVitae) {
        this.curriculumVitae = curriculumVitae;
    }

    public List<Categoria> getCategorias() {
        return categorias;
    }

    public void setCategorias(List<Categoria> categorias) {
        this.categorias = categorias;
    }

    public List<Registro> getRegistros() {
        return registros;
    }

    public void setRegistros(List<Registro> registros) {
        this.registros = registros;
    }

    @Override
    public String toString() {
        return "Usuário:\n[id_usuario    =" +id  +  ",\n"
                            +"em_usuario =" +email     +  ",\n"
                            +"sn_usuario =" +senha  +  ",\n"
                            +"nm_usuario =" +nome  +  ",\n"
                            +"tt_usuario =" +titulo +  ",\n"
                            +"cv_usuario =" +curriculumVitae +  ",\n"

                +"]";
    }
}

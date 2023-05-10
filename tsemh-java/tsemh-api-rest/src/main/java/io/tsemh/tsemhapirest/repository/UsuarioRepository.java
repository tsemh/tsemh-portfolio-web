package io.tsemh.tsemhapirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import io.tsemh.tsemhapirest.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}

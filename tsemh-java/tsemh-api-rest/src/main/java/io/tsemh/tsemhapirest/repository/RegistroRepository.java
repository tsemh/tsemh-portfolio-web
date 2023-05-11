package io.tsemh.tsemhapirest.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import io.tsemh.tsemhapirest.entity.Categoria;
import io.tsemh.tsemhapirest.entity.Registro;

public interface RegistroRepository extends JpaRepository<Registro, Long> {
	
	List<Registro> findByCategoria(Categoria categoria);
	List<Registro> findByTipo(String tipo);

}
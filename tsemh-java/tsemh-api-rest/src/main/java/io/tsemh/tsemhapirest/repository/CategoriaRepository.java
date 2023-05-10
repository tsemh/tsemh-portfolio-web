package io.tsemh.tsemhapirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import io.tsemh.tsemhapirest.entity.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}

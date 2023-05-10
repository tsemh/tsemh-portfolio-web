package io.tsemh.tsemhapirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import io.tsemh.tsemhapirest.entity.Arquivo;

public interface ArquivoRepository extends JpaRepository<Arquivo, Long>{

}

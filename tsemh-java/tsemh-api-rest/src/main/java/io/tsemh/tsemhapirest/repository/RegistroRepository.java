package io.tsemh.tsemhapirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import io.tsemh.tsemhapirest.entity.Registro;

public interface RegistroRepository extends JpaRepository<Registro, Integer> {

}
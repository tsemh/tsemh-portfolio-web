package io.tsemh.tsemhapirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import io.tsemh.tsemhapirest.entity.Postagem;

public interface PostagemRepository extends JpaRepository<Postagem, Integer> {

}

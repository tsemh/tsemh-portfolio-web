package io.tsemh.tsemhapirest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import io.tsemh.tsemhapirest.entity.Projeto;
import io.tsemh.tsemhapirest.repository.ProjetoRepository;

@RestController
@RequestMapping("/projeto")
public class ProjetoController {

		@Autowired
		private ProjetoRepository projetoRepository; 

		@PostMapping
		@Transactional
		public Projeto postProjeto(@RequestBody Projeto projeto) {
			return projetoRepository.save(projeto);
		}
		
		@GetMapping
		public List<Projeto> getAllProjeto() {
			return projetoRepository.findAll();
		}
		
		@GetMapping("{idProjeto}")
		public Projeto getProjetoById(@PathVariable int idProjeto) {
			return projetoRepository.findById(idProjeto).get();
		}
		
		@PutMapping("{idProjeto}")
		public Projeto putProjeto(@RequestBody Projeto projeto, @PathVariable int idProjeto) {
			projeto.setId(idProjeto);
			return projetoRepository.save(projeto);
		}
		
		@DeleteMapping("{idProjeto}")
		public void deleteProjeto(@PathVariable int idProjeto) {
			projetoRepository.deleteById(idProjeto);
		}
}

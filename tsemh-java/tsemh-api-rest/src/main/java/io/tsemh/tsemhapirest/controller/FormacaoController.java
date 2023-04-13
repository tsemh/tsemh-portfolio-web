package io.tsemh.tsemhapirest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import io.tsemh.tsemhapirest.entity.Formacao;
import io.tsemh.tsemhapirest.repository.FormacaoRepository;


@RestController
@RequestMapping("formacao")
public class FormacaoController {

		@Autowired
		private FormacaoRepository formacaoRepository; 

		@PostMapping
		@Transactional
		public Formacao postFormacao(@RequestBody Formacao formacao) {
			return formacaoRepository.save(formacao);
		}
		
		@GetMapping
		public List<Formacao> getAllFormacao() {
			return formacaoRepository.findAll();
		}
		
		@GetMapping("{idFormacao}")
		public Formacao getFormacaoById(@PathVariable int idFormacao) {
			return formacaoRepository.findById(idFormacao).get();
		}
		
		@PutMapping("{idFormacao}")
		public Formacao putFormacao(@RequestBody Formacao formacao, @PathVariable int idFormacao) {
			formacao.setIdFormacao(idFormacao);
			return formacaoRepository.save(formacao);
		}
		
		@DeleteMapping("{idFormacao}")
		public void deleteFormacao(@PathVariable int idFormacao) {
			formacaoRepository.deleteById(idFormacao);
		}
	}

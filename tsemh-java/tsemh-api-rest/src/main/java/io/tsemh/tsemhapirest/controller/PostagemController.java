package io.tsemh.tsemhapirest.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import io.tsemh.tsemhapirest.entity.Postagem;
import io.tsemh.tsemhapirest.repository.PostagemRepository;

@RestController
@RequestMapping("/postagem")
public class PostagemController {

		@Autowired
		private PostagemRepository postagemRepository; 

		@PostMapping
		@Transactional
		public Postagem postPostagem(@RequestBody Postagem postagem) {
			return postagemRepository.save(postagem);
		}
		
		@GetMapping
		public List<Postagem> getAllPostagem() {
			return postagemRepository.findAll();
		}
		
		@GetMapping("{idPostagem}")
		public Postagem getPostagemById(@PathVariable int idPostagem) {
			return postagemRepository.findById(idPostagem).get();
		}
		
		@PutMapping("{idPostagem}")
		public Postagem putPostagem(@RequestBody Postagem postagem, @PathVariable int idPostagem) {
			postagem.setIdPostagem(idPostagem);
			return postagemRepository.save(postagem);
		}
		
		@DeleteMapping("{idPostagem}")
		public void deletePostagem(@PathVariable int idPostagem) {
			postagemRepository.deleteById(idPostagem);
		}
}

package io.tsemh.tsemhapirest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import io.tsemh.tsemhapirest.entity.Categoria;
import io.tsemh.tsemhapirest.repository.CategoriaRepository;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {

	@Autowired
	private CategoriaRepository categoriaRepository; 

	@PostMapping
	@Transactional
	public Categoria postCategoria(@RequestBody Categoria categoria) {
		return categoriaRepository.save(categoria);
	}
	
	@GetMapping
	public List<Categoria> getAllCategoria() {
		return categoriaRepository.findAll();
	}
	
	@GetMapping("{idCategoria}")
	public Categoria getCategoriaById(@PathVariable int idCategoria) {
		return categoriaRepository.findById(idCategoria).get();
	}
	
	@PutMapping("{idCategoria}")
	public Categoria putCategoria(@RequestBody Categoria categoria, @PathVariable int idCategoria) {
		categoria.setIdCategoria(idCategoria);
		return categoriaRepository.save(categoria);
	}
	
	@DeleteMapping("{idCategoria}")
	public void deleteCategoria(@PathVariable int idCategoria) {
		categoriaRepository.deleteById(idCategoria);
	}
}

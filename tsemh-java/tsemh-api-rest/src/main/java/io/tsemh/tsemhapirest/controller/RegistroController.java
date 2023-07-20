package io.tsemh.tsemhapirest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import io.tsemh.tsemhapirest.entity.Categoria;
import io.tsemh.tsemhapirest.entity.Registro;
import io.tsemh.tsemhapirest.entity.Usuario;
import io.tsemh.tsemhapirest.repository.CategoriaRepository;
import io.tsemh.tsemhapirest.repository.RegistroRepository;
import io.tsemh.tsemhapirest.repository.UsuarioRepository;

@RestController
@RequestMapping("/registro")
public class RegistroController {
	
		@Autowired
		private RegistroRepository registroRepository; 
		@Autowired
		private UsuarioRepository usuarioRepository; 
		@Autowired
		private CategoriaRepository categoriaRepository; 
		
		@PostMapping("/cadastrar")
		@Transactional
		public Registro postRegistro(@RequestBody Registro registro, @RequestParam long idUsuario, @RequestParam String titulo) {
		    Optional<Usuario> usuarioOptional = usuarioRepository.findById(idUsuario);

		    if (usuarioOptional.isPresent()) {
		        Usuario usuario = usuarioOptional.get();

		        Categoria categoria = categoriaRepository.findByTitulo(titulo);

		        if (categoria == null) {
		            categoria = new Categoria();
		            categoria.setTipo(registro.getTipo());
		            categoria.setUsuario(usuario);
		            categoria.setTitulo(titulo);
		            categoriaRepository.save(categoria);
		        }

		        registro.setUsuario(usuario);
		        registro.setCategoria(categoria);
		        return registroRepository.save(registro);
		    } else {
		        throw new RuntimeException("Usuário não encontrado com ID " + idUsuario);
		    }
		}

			
		@GetMapping
		public List<Registro> getAllRegistro() {
			return registroRepository.findAll();
		}
		
		@GetMapping("{id}")
		public Registro getRegistroById(@PathVariable long id) {	
			return registroRepository.findById(id).get();
		}
		
		@GetMapping("categoria")
		public List<Registro> getRegistroByCategoria(@RequestParam Long categoriaId){
		    Categoria categoria = categoriaRepository.findById(categoriaId).orElse(null);
		    if(categoria == null) {
		    	throw new RuntimeException("Categoria não encontrada com ID " + categoriaId);
		    }
		    return registroRepository.findByCategoria(categoria);
		}
		
		@GetMapping("tipo")
		public List<Registro> getRegistroByTipo(@RequestParam String tipo) {
		    if(tipo == null) {
		        throw new RuntimeException("Tipo não encontrado");
		    }
		    return registroRepository.findByTipo(tipo);
		}
		
		@GetMapping("destaque")
		public List<Registro> getRegistroByDestaque(@RequestParam Boolean destaque) {
		    long count = registroRepository.countByDestaque(true);

		    if (count > 4) {
		        throw new RuntimeException("Excedeu o limite de registros com destaque");
		    }

		    return registroRepository.findByDestaque(destaque);
		}
		
		@GetMapping("tipos")
		public List<String> getTiposDeRegistro() {
		    return registroRepository.findDistinctTipo();
		}
		
		@PutMapping("/editar/{id}")
		public Registro putRegistro(@RequestBody Registro registro, @PathVariable int id) {
			registro.setId(id);
			return registroRepository.save(registro);
		}
		
		@DeleteMapping("/deletar/{id}")
		public void deleteRegistro(@PathVariable long id) {
			registroRepository.deleteById(id);
		}
}

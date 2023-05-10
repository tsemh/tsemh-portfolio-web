package io.tsemh.tsemhapirest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import io.tsemh.tsemhapirest.entity.Usuario;
import io.tsemh.tsemhapirest.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepository; 

	@PostMapping
	@Transactional
	public Usuario postUsuario(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}
	
	@GetMapping
	public List<Usuario> getAllUsuario() {
		return usuarioRepository.findAll();
	}
	
	@GetMapping("{id}")
	public Usuario getUsuarioById(@PathVariable long id) {
		return usuarioRepository.findById(id).get();
	}
	
	@PutMapping("{id}")
	public Usuario putUsuario(@RequestBody Usuario usuario, @PathVariable long id) {
		usuario.setId(id);
		return usuarioRepository.save(usuario);
	}
	
	@DeleteMapping("{id}")
	public void deleteUsuario(@PathVariable long id) {
		usuarioRepository.deleteById(id);
	}
}
	
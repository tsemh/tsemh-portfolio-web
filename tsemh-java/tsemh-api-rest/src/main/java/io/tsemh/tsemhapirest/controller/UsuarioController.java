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
	
	@GetMapping("{idUsuario}")
	public Usuario getUsuarioById(@PathVariable int idUsuario) {
		return usuarioRepository.findById(idUsuario).get();
	}
	
	@PutMapping("{idUsuario}")
	public Usuario putUsuario(@RequestBody Usuario usuario, @PathVariable int idUsuario) {
		usuario.setIdUsuario(idUsuario);
		return usuarioRepository.save(usuario);
	}
	
	@DeleteMapping("{idUsuario}")
	public void deleteUsuario(@PathVariable int idUsuario) {
		usuarioRepository.deleteById(idUsuario);
	}
}
	
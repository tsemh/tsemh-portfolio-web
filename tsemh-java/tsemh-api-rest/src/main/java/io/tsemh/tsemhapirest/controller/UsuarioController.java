package io.tsemh.tsemhapirest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import io.tsemh.tsemhapirest.entity.Usuario;
import io.tsemh.tsemhapirest.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepository; 

	@PostMapping("/cadastrar")
	@Transactional
	public Usuario postUsuario(@RequestBody Usuario usuario) {
	    List<Usuario> usuarios = usuarioRepository.findAll();

	    if (usuarios.isEmpty()) {
	        return usuarioRepository.save(usuario);
	    } else {
	        throw new RuntimeException("Não é possível criar um novo usuário. Já existe um usuário cadastrado.");
	    }
	}

	@GetMapping
	public List<Usuario> getAllUsuario() {
		return usuarioRepository.findAll();
	}
	
	@GetMapping("{id}")
	public Usuario getUsuarioById(@PathVariable long id) {
		return usuarioRepository.findById(id).get();
	}
	
	@PutMapping("/editar/{id}")
	public Usuario putUsuario(@RequestBody Usuario usuario, @PathVariable long id) {
		usuario.setId(id);
		return usuarioRepository.save(usuario);
	}
	
	@DeleteMapping("/deletar/{id}")
	public void deleteUsuario(@PathVariable long id) {
		usuarioRepository.deleteById(id);
	}
}
	
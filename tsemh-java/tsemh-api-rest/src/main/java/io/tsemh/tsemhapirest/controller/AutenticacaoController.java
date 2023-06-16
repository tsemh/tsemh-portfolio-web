package io.tsemh.tsemhapirest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.tsemh.tsemhapirest.entity.Usuario;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/login")
public class AutenticacaoController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping
	public ResponseEntity efetuarLogin(@RequestBody @Valid Usuario usuario) {
		var token = new UsernamePasswordAuthenticationToken(usuario.getEmail(), usuario.getSenha());
		authenticationManager.authenticate(token);
		
		return ResponseEntity.ok().build();
	}

}

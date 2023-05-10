package io.tsemh.tsemhapirest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import io.tsemh.tsemhapirest.entity.Arquivo;
import io.tsemh.tsemhapirest.entity.Registro;
import io.tsemh.tsemhapirest.repository.ArquivoRepository;
import io.tsemh.tsemhapirest.repository.RegistroRepository;

public class ArquivoController {

	@Autowired
	private ArquivoRepository arquivoRepository;
	@Autowired
	private RegistroRepository registroRepository; 

	@PostMapping("/arquivos")
	@Transactional
	public Arquivo postArquivo(@RequestBody Arquivo arquivo, @RequestParam Long idRegistro) {
	    Optional<Registro> registroOptional = registroRepository.findById(idRegistro);
	    if (registroOptional.isPresent()) {
	        Registro registro = registroOptional.get();
	        arquivo.setRegistro(registro);
	        return arquivoRepository.save(arquivo);
	    } else {
	        throw new RuntimeException("Registro não encontrado com ID " + idRegistro);
	    }
	}
		
	@GetMapping
	public List<Arquivo> getAllArquivo() {
		return arquivoRepository.findAll();
	}
	
	@GetMapping("{id}")
	public Arquivo getArquivoById(@PathVariable long id) {
		return arquivoRepository.findById(id).get();
	}
	
	@PutMapping("{id}")
	public Arquivo putArquivo(@RequestBody Arquivo arquivo, @PathVariable long id) {
		arquivo.setId(id);
		return arquivoRepository.save(arquivo);
	}
	
	@DeleteMapping("{id}")
	public void deleteArquivo(@PathVariable long id) {
		arquivoRepository.deleteById(id);
	}
}




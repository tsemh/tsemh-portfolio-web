package io.tsemh.tsemhapirest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import io.tsemh.tsemhapirest.entity.Registro;
import io.tsemh.tsemhapirest.repository.RegistroRepository;

@RestController
@RequestMapping("/registro")
public class RegistroController {

		@Autowired
		private RegistroRepository repository; 

		@PostMapping
		@Transactional
		public Registro postRegistro(@RequestBody Registro registro) {
			return repository.save(registro);
		}
		
		@GetMapping
		public List<Registro> getAllRegistro() {
			return repository.findAll();
		}
		
		@GetMapping("{id}")
		public Registro getRegistroById(@PathVariable int id) {	
			return repository.findById(id).get();
		}
		
		@PutMapping("{id}")
		public Registro putRegistro(@RequestBody Registro registro, @PathVariable int id) {
			registro.setId(id);
			return repository.save(registro);
		}
		
		@DeleteMapping("{id}")
		public void deleteRegistro(@PathVariable int id) {
			repository.deleteById(id);
		}
}

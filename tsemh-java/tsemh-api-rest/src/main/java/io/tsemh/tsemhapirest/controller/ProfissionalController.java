package io.tsemh.tsemhapirest.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import io.tsemh.tsemhapirest.entity.Profissional;
import io.tsemh.tsemhapirest.repository.ProfissionalRepository;

@RestController
@RequestMapping("/profissional")
public class ProfissionalController {

		@Autowired
		private ProfissionalRepository profissionalRepository; 

		@PostMapping
		@Transactional
		public Profissional postProfissional(@RequestBody Profissional profissional) {
			return profissionalRepository.save(profissional);
		}
		
		@GetMapping
		public List<Profissional> getAllProfissional() {
			return profissionalRepository.findAll();
		}
		
		@GetMapping("{idProfissional}")
		public Profissional getProfissionalById(@PathVariable int idProfissional) {
			return profissionalRepository.findById(idProfissional).get();
		}
		
		@PutMapping("{idProfissional}")
		public Profissional putProfissional(@RequestBody Profissional profissional, @PathVariable int idProfissional) {
			profissional.setId(idProfissional);
			return profissionalRepository.save(profissional);
		}
		
		@DeleteMapping("{idProfissional}")
		public void deleteProfissional(@PathVariable int idProfissional) {
			profissionalRepository.deleteById(idProfissional);
		}

}

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
	
		private static String bancoDeArquivos = "C:\\Users\\tiago\\Documents\\Tiago\\programacao\\"
				+ "Projetos\\MeuPortfolioWeb\\Codigos\\tsemh-portfolio-web\\Banco-de-arquivos";

		@Autowired
		private RegistroRepository registroRepository; 
		@Autowired
		private UsuarioRepository usuarioRepository; 
		@Autowired
		private CategoriaRepository categoriaRepository; 
		
		@PostMapping("/registros")
		@Transactional
		public Registro postRegistro(@RequestBody Registro registro, @RequestParam long idUsuario,  @RequestParam long idCategoria ) {
		    Optional<Usuario> usuarioOptional = usuarioRepository.findById(idUsuario);
		    Optional<Categoria> categoriaOptional = categoriaRepository.findById(idCategoria);
		    if (usuarioOptional.isPresent() && categoriaOptional.isPresent()) {
		        Usuario usuario = usuarioOptional.get();
		        Categoria categoria = categoriaOptional.get();
		        
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
		
		@PutMapping("{id}")
		public Registro putRegistro(@RequestBody Registro registro, @PathVariable int id) {
			registro.setId(id);
			return registroRepository.save(registro);
		}
		
		@DeleteMapping("{id}")
		public void deleteRegistro(@PathVariable long id) {
			registroRepository.deleteById(id);
		}
}

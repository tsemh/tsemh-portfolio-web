package io.tsemh.tsemhapirest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import io.tsemh.tsemhapirest.entity.Certificado;
import io.tsemh.tsemhapirest.repository.CertificadoRepository;

@RestController
@RequestMapping("/certificado")
public class CertificadoController {
		
		@Autowired
		private CertificadoRepository certificadoRepository; 

		@PostMapping
		@Transactional
		public Certificado postCertificado(@RequestBody Certificado certificado) {
			return certificadoRepository.save(certificado);
		}
		
		@GetMapping
		public List<Certificado> getAllCertificado() {
			return certificadoRepository.findAll();
		}
		
		@GetMapping("{idCertificado}")
		public Certificado getCertificadoById(@PathVariable int idCertificado) {
			return certificadoRepository.findById(idCertificado).get();
		}
		
		@PutMapping("{idCertificado}")
		public Certificado putCertificado(@RequestBody Certificado certificado, @PathVariable int idCertificado) {
			certificado.setId(idCertificado);
			return certificadoRepository.save(certificado);
		}
		
		@DeleteMapping("{idCertificado}")
		public void deleteCertificado(@PathVariable int idCertificado) {
			certificadoRepository.deleteById(idCertificado);
		}
}

import { CertificadoService } from './../service/certificado.service';
import { Component } from '@angular/core';
import { Certificado } from '../models/Certificado';

@Component({
  selector: 'tsemh-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent {
  
  public tituloMain: string = 'certificados';

  public visaoCategoria: boolean = true;

  public entidades: Certificado[] = []

  constructor(private certificadoService: CertificadoService) {  }

  determinaBoolean() {
    if(this.entidades.length >= 6) { this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }
   public visaoPaginacao: boolean = this.determinaBoolean();

   carregarCertificados() {
    this.certificadoService.getAll().subscribe(
      (certificados: Certificado[]) => {
        this.entidades = certificados;
      },
      (e: any) => {
        console.error(e)
      }
    ); 
   }

  ngOnInit(): void { 
    this.carregarCertificados();
   }

}

import { Component } from '@angular/core';
import { Certificado } from 'src/app/models/Certificado';
import { CertificadoService } from 'src/app/service/certificado.service';

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

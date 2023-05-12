import { Registro } from 'src/app/models/Registro';
import { Component } from '@angular/core';

@Component({
  selector: 'tsemh-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent {
  
  public tituloMain: string = "certificados";
  public tipo: string = "certificado";
  public registro: Registro[] = []

  constructor() {  }
  
   ngOnInit(): void { }
}

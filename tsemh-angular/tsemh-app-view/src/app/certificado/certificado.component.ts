import { Component } from '@angular/core';
import { Categoria } from '../models/Categoria';

@Component({
  selector: 'tsemh-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent {
  
  public tituloMain: string = 'certificados';

  public visaoCategoria: boolean = true;

  public categorias: Categoria[] = [];

  public entidades= [ 
    {
     id: 1, tipo: 'certificados', titulo: 'alura', link: 'link', descricao: 'descrição', imagem: 'caminho da imagem', descricaoImagem: 'descrição da imagem'
    } 
  ]
  constructor() {  }

  determinaBoolean() {
    if(this.entidades.length >= 6) { this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }

   public visaoPaginacao: boolean = this.determinaBoolean();


  ngOnInit() { 

   }

}

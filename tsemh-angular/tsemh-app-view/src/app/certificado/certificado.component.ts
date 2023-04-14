import { Component } from '@angular/core';

@Component({
  selector: 'tsemh-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent {
  
  public tituloMain: string = 'certificados';

  public visaoCategoria: boolean = true;

  public categorias = [

    { id: 0, titulo: 'tag 0', link: '0' , grupo: 'projetos' },
    { id: 1, titulo: 'tag 1',link: '0',grupo: 'postagens' },
    { id: 2, titulo: 'tag 2',link: '0', grupo: 'profissional'},
    { id: 3, titulo: 'tag 3',link: '0',grupo: 'certificados'},
    { id: 4, titulo: 'tag 4',link: '0',grupo: 'formações'},
];


  public itens= [];

  constructor() {  }

  determinaBoolean() {
    if(this.itens.length >= 6) { this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }

   public visaoPaginacao: boolean = this.determinaBoolean();


  ngOnInit() { 

   }

}

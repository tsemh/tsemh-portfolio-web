import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tituloMain: string = 'destaques';

  public visaoPaginacao: boolean = false;
  public visaoCategoria: boolean = false;
  
  public entidades= [ 
    {
     id: 1, tipo: 'destaques', titulo: 'destaque', link: 'link', descricao: 'descrição', imagem: 'caminho da imagem', descricaoImagem: 'descrição da imagem'
    } 
  ]

  public usuario = [
    {idUsuario: '1', nomeUsuario: 'Tiago B. da Silva', tituloUsuario: 'Desenvolvedor | Java | .NET | Angular', curriculumVitaeUsuario: '../../assets\\curriculo\\Tiago-Junior-Angular-Java-dotNet.pdf' }
  ]

  constructor() {}

  ngOnInit(): void {
  }

}

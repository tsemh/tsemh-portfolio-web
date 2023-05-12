import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Registro } from 'src/app/models/Registro';


@Component({
  selector: 'tsemh-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  public tituloMain: string = "artigos";
  public tipo: string = "artigo";


  public registro: Registro[] = []
  public categorias: Categoria[] = [];

  constructor() {  }

   ngOnInit(): void { }
}

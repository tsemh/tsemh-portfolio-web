import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/Registro';

@Component({
  selector: 'tsemh-formacao', 
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css']
})
export class FormacaoComponent implements OnInit{
  
  public tituloMain: string = "formações";
  public tipo: string = "";
  public registro: Registro[] = []

  constructor() {  }

   ngOnInit(): void { }
}

import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/Registro';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  public tituloMain: string = "profissional";
  public tipo: string = "profissional";
  public registro: Registro[] = [];

  constructor() {  }

  ngOnInit(): void { }
}

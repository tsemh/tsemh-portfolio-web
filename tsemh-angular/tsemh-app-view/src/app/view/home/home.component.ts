import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/Registro';
import { Usuario } from 'src/app/models/usuariro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tituloMain: string = 'destaques';
  public registro: Registro[] = []

  public usuario: Usuario[] = [];

  constructor() {}

  ngOnInit(): void {
  }

}

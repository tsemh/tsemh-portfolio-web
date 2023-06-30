import { Injectable } from '@angular/core';
import { Registro } from '../models/Registro';
import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CompartilhadoService {

  private registroId: number = 0;
  private categoriaId: number = 0;

  constructor() { }

  getRegistroId(){
    return this.registroId;
  }
  setRegistroId(idSelecionado: number) {
    this.registroId = idSelecionado;
  }
  getCategoriaId() {
    return this.categoriaId;
  }
  setCategoriaId(idSelecionado: number) {
    this.categoriaId = idSelecionado;
  }
  
}

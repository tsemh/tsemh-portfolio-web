import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Registro } from '../models/Registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private baseUrl = `${environment.apiUrl}/registro`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Registro[]> {
    return this.http.get<Registro[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Registro> {
    return this.http.get<Registro>(`${this.baseUrl}/${id}`);
  }

  getRegistroByCategoria(categoriaId: number): Observable<Registro[]> {
    return this.http.get<Registro[]>(`${this.baseUrl}/categoria?categoriaId=${categoriaId}`);
  }
  
  getByTipo(tipo: string): Observable<Registro[]> {
    const url = `${this.baseUrl}/tipo?tipo=${tipo}`;
    return this.http.get<Registro[]>(url);
  }
  
  getByDestaque(destaque: boolean): Observable<Registro[]> {
    const url = `${this.baseUrl}/destaque?destaque=${destaque}`;
    return this.http.get<Registro[]>(url);
  }

  getTiposDeRegistro(): Observable<string[]> {
    const url = `${this.baseUrl}/tipos`;
    return this.http.get<string[]>(url);
  }
  postRegistro(registro: Registro, idUsuario: number, titulo: string): Observable<Registro> {
    const url = `${this.baseUrl}/cadastrar?idUsuario=${idUsuario}&titulo=${titulo}`;
    return this.http.post<Registro>(url, registro);
  }
  putRegistro(registro: Registro, id: number): Observable<Registro> {
    const url = `${this.baseUrl}/editar/${id}`;
    return this.http.put<Registro>(url, registro);
  }
  deleteRegistro(id: number): Observable<Registro> {
    const url = `${this.baseUrl}/deletar/${id}`;
    return this.http.delete<Registro>(url)
  }
}

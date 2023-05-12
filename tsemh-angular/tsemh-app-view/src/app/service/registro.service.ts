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
  
}

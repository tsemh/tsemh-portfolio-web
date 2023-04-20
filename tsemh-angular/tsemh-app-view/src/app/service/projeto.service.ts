import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Projeto } from '../models/Projeto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private baseUrl = `${environment.apiUrl}/projeto`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Projeto> {
    return this.http.get<Projeto>(`${this.baseUrl}/${id}`);
  }
}

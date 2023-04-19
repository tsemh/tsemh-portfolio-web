import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Artigo } from '../models/Artigo';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  private baseUrl = `${environment.apiUrl}/postagem`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Artigo[]> {
    return this.http.get<Artigo[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Artigo> {
    return this.http.get<Artigo>(`${this.baseUrl}/${id}`);
  }
}

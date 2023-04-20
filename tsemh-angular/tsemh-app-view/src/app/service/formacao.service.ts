import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Formacao } from '../models/formacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormacaoService {
  private baseUrl = `${environment.apiUrl}/formacao`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Formacao[]> {
    return this.http.get<Formacao[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Formacao> {
    return this.http.get<Formacao>(`${this.baseUrl}/${id}`);
  }
}

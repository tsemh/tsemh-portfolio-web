import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Profissional } from '../models/Profissional';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  private baseUrl = `${environment.apiUrl}/profissional`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Profissional> {
    return this.http.get<Profissional>(`${this.baseUrl}/${id}`);
  }
}

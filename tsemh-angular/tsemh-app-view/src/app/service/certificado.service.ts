import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Certificado } from '../models/Certificado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  private baseUrl = `${environment.apiUrl}/certificado`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Certificado[]> {
    return this.http.get<Certificado[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Certificado> {
    return this.http.get<Certificado>(`${this.baseUrl}/${id}`);
  }
}

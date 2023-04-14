import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  private baseUrl = `${environment.apiUrl}/postagem`;

  constructor(private http: HttpClient) { }

  getAll() {

    return this.http.get(`${this.baseUrl}`);

  }
}

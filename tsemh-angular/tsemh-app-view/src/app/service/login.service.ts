import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private baseUrl = `${environment.apiUrl}/login`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(dadosLogin: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    return this.httpClient.post(this.baseUrl, dadosLogin, { headers }).subscribe(
      (data: any) => {
        console.log('Login bem-sucedido!', data);
  
        const token = data.token;
        localStorage.setItem('token', token);
  
        this.router.navigate(['/painel-de-controle']);
      },
      error => {
        console.error('Erro ao fazer login', error);
      }
    );
  }
  
}

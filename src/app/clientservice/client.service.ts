import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '@app/client';
import { LoginResponse } from '../login/login.response.model';
import { LoginRequest } from '../login/login.request.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) { }

  getClient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getClientByNameAndPassword(name: string, password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}/password/${password}`);
  }

  getAllClients(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  insertClient(value: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, value);
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<any>(this.baseUrl + '/login', loginRequest);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '@app/client';


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

}

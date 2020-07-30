import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getClient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateClient(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

}

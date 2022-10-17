import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor( private http: HttpClient) { }
  url = "https://recipes-api-production-2d9d.up.railway.app/api/";

  get<T>(rota: string) {
    let token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<T>(this.url + rota, { headers: headers });
  }

  post<T>(rota: string, body: any) {
    let token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.post<T>(this.url + rota, body,  { headers: headers });
  }

  delete<T>(rota: string) {
    let token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.delete<T>(this.url + rota,  { headers: headers });
  }

  put<T>(rota: string, body: any) {
    let token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.put<T>(this.url + rota, body,  { headers: headers });
  }
  
}

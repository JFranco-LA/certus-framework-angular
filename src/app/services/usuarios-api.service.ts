import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios } from '../models/usuarioApi';

@Injectable({
  providedIn: 'root'
})
export class UsuariosAPIService {


  urlApi: string = 'https://jsonplaceholder.typicode.com/users/'
  
  constructor(private http: HttpClient) { }

  getUsuarios() {
    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    //   'Content-Security-Policy': 'upgrade-insecure-requests'
    // });
    // return this.http.get<Usuarios[]>(this.urlApi, { headers })
    return this.http.get<Usuarios[]>(this.urlApi)
  }
}
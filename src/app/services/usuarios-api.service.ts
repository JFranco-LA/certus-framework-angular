import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarioApi';

@Injectable({
  providedIn: 'root'
})
export class UsuariosAPIService {


  urlApi: string = 'http://jsonplaceholder.typicode.com/users/'
  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get<Usuarios[]>(this.urlApi)
  }
}
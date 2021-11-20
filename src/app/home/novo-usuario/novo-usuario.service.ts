import { environment } from './../../../environments/environment';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.urlAPI

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this.httpClient.post(`${API}/user/signup`, novoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string): Observable<any> {
    return this.httpClient.get(`${API}/user/exists/${nomeUsuario}`)
  }
}

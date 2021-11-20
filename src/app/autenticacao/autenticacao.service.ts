import { environment } from './../../environments/environment';
import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http"
import { Observable, tap } from 'rxjs';

const API = environment.urlAPI

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }

  public autentica(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(
      `${API}/user/login`,
      {userName: usuario, password: senha},
      {observe: "response"}
    ).pipe(
      //tap realiza uma função de efeito colateral, independente do resultado da requisição
      tap((res) => {
        const authToken = res.headers.get("x-access-token") ?? ""
        this.usuarioService.salvaToken(authToken)
      })
    )
  }
}

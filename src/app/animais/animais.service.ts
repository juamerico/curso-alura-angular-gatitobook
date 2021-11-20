import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Animais } from './animais';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.urlAPI

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {}

  public listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornaToken()
    const headers = new HttpHeaders().append("x-access-token", token)

    return this.httpClient.get<Animais>(
      `${API}/${nomeDoUsuario}/fotos`,
      {headers}
    )
  }
}

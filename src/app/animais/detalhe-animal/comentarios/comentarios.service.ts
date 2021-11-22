import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario, Comentarios } from './comentarios';

const API = environment.urlAPI

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private httpClient: HttpClient) { }

  public buscaComentario(id: number): Observable<Comentarios> {
    return this.httpClient.get<Comentarios>(`${API}/photos/${id}/comments`)
  }

  public incluiComentario(id: number, commentText: string): Observable<Comentario> {
    return this.httpClient.post<Comentario>(
      `${API}/photos/${id}/comments`,
      { commentText }
    )
  }
}

import { environment } from './../../environments/environment';
import { Animais, Animal } from './animais';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';

const API = environment.urlAPI
const NOT_MODIEFIED = "304"

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private httpClient: HttpClient) { }

  public listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`)
  }

  public buscaPorId(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${API}/photos/${id}`)
  }

  public excluiAnimal(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(`${API}/photos/${id}`)
  }

  public curtir(id: number): Observable<boolean> {
    return this.httpClient.post(
      `${API}/photos/${id}/like`,
      {},
      { observe: "response" }
    ).pipe(
      mapTo(true),
      catchError((error) => {
        return error.status === NOT_MODIEFIED ? of(false) : throwError(error)
      })
    )
  }

}

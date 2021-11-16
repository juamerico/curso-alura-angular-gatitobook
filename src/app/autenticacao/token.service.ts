import { Injectable } from '@angular/core';

const KEY: string = "token"

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  public retornaToken() {
    return localStorage.getItem(KEY) ?? ""
  }

  public salvaToken(token: string) {
    localStorage.setItem(KEY, token)
  }

  public excluiToken() {
    localStorage.removeItem(KEY)
  }

  public possuiToken() {
    return !!this.retornaToken()
  }
}

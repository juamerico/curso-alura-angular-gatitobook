import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { switchMap, map, first } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  public usuarioJaExiste() {
    return (control: AbstractControl): Observable<any> => {
      //um Observable, ou seja, uma Promise de verificação no banco de dados se o usuário já existe
      //Observable é a versão do RXJS de uma Promise
      return control.valueChanges.pipe(
        //switchMap recebe o que foi digitado no formulário e envia para a requisição ao backend
        //arg nomeUsuario é valor do input "userName"
        //control.valueChanges === onChange === event input
        switchMap(
          (nomeUsuario) => this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        //map recebe o resultado da função do switchMap. No caso um boolean
        //assim como o map do JS, retorna este dado da forma que quiser
        //neste caso, criando o objeto "{usuarioExistente: true} se a requisição ao backend assim retornar"
        //este objeto vai para a propriedade "errors" do formulário HTML
        map(
          ((isUsuario) => (isUsuario ? {usuarioExistente: true} : null))
        ),
        //first encerra o Observable, se não o resultado não é enviado para o HTML do componente
        first()
      )
    }
  }
}

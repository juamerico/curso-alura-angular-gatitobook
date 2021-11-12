import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario = ""
  public senha = ""

  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.autentica(this.usuario, this.senha)
      .subscribe(() => {
        console.log(`Usuário ${this.usuario} autenticado com sucesso!`)
        alert(`Usuário ${this.usuario} autenticado com sucesso!`)
      },
      (erro) => {
        console.log(erro)
        alert(JSON.stringify({erro: erro.message}))
      })
  }

}

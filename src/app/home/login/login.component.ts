import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario = ""
  public senha = ""

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.autentica(this.usuario, this.senha)
      .subscribe(() => {
        this.router.navigate(["animais"])
      },
      (erro) => {
        console.log(erro)
        alert(("Usuário ou senha inválidos!"))
      })
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';


@Injectable()
export class UsuariosServiceProvider {

  private _usuarioLogado:Usuario;
  constructor(public _http: HttpClient) {
    console.log('Hello UsuariosServiceProvider Provider');
  }


  efetuaLogin(cpf, senha) {
  
    
    var usuario = {"cpf":cpf, "senha":senha};
    console.log(usuario)
    return this._http.post<Usuario>('http://localhost:3000/usuarios/logar',usuario )
              .do((usuario: Usuario) => this._usuarioLogado = usuario);
  }

  public usuarioLogado(){
    return this._usuarioLogado;
  }
}

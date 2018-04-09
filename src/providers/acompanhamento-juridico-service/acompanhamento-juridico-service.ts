import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AcompanhamentoJuridicoServiceProvider {

  constructor(public _http: HttpClient) {
    console.log('Hello AcompanhamentoJuridicoServiceProvider Provider');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cep } from './cep.module';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  cidades:any = []
  CidadesUrlGet='http://localhost:8080/cities/';
  CidadesUrlPost='http://localhost:8080/cities/cep/cep';


  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.CidadesUrlGet}`);
  }
  addPorCEP(CEP: cep){
     return this.http.post(`${this.CidadesUrlPost}`,CEP,{observe: 'response'})
     .subscribe( data => {
       console.log(data);
     });
  }
}

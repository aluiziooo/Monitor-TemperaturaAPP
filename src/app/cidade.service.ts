import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  cidades:any = []
  CidadesUrlGet='http://localhost:8080/cities/';
  CidadesUrlPost='http://localhost:8080/cities/cep/}';


  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.CidadesUrlGet}`)
  }
  addPorCEP(cep: String){
     return this.http.post("http://localhost:8080/cities/cep/cep",cep);
  }
}

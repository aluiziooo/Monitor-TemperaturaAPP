import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  CidadesUrl='http://localhost:8080/cities/';


  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.CidadesUrl}`);
  }
}

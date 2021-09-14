import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cep } from './cep.module';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  cidades:any = []
  CidadesUrlGet='http://localhost:8080/cities/';
  CidadesUrlPost='http://localhost:8080/cities/cep/cep';


  constructor(private http: HttpClient, private messageService: MessageService) { }

  listar(): Observable<cep[]>{
    return this.http.get<any[]>(`${this.CidadesUrlGet}`).pipe(
      tap(_ => console.log('getcidades')),
      catchError(this.handleError<any[]>('listar', []))
    );
  }
  addPorCEP(CEP: cep){
     return this.http.post(`${this.CidadesUrlPost}`,CEP).pipe(tap(_=> console.log('post cidade')),
     catchError(this.handleError<any[]>('Salvar',[])));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
    /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}

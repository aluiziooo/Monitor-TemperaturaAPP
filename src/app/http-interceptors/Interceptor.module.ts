import { SpinnerService } from './../spinner/spinner.service';
import { CidadeService } from '../cidade.service';
import { HttpErrorResponse, HttpInterceptor, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class Interceptor implements HttpInterceptor{
  constructor(public spinnerService: SpinnerService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinnerService.requestStarted();
    return this.handler(next,request);
  }

  handler(next:any, request:any){
    return next.handle(request).pipe(tap((event:any)=>{
      if(event instanceof HttpResponse){
        this.spinnerService.requestEnded();
      }
    },
    (error: HttpErrorResponse)=>{
      this.spinnerService.requestEnded();
      throw error;
    }
    ))
  }
}

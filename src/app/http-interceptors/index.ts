import { Interceptor } from './Interceptor.module';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

export const httpInterceptProviders= [
  {
    provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true
  }
]

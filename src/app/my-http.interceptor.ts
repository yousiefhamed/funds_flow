import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {





    const myToken:any = localStorage.getItem('userToken')

     if (myToken) {
       const cloned = request.clone({
         headers: request.headers.set('Authorization', `Bearer ${myToken}`),
       });
 
       return next.handle(cloned);
     } else {
       return next.handle(request);
     }


  }
}

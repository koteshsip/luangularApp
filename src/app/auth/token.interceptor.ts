import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthServiceService } from '../service/auth-service.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): 
  Observable<HttpEvent<any>> {  
    request = request.clone({
      setHeaders: {//Bearer
        token: `${this.auth.getToken()}`,
      }
    });

    return next.handle(request);
  }
}
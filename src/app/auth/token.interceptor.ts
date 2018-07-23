import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthServiceService } from '../service/auth-service.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params,Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthServiceService,public router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): 
  Observable<HttpEvent<any>> {
    // if(this.auth.getToken() === null){
    //   this.router.navigate(['/login']);
    // }  
    request = request.clone({
      setHeaders: {
        'token': `${this.auth.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      }
    });
    return next.handle(request);
  }
}
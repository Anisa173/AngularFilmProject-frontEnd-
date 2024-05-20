import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpStatusCode,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, tap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(protected authServ: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Request is made');
    const authReq = request.clone({
      setHeaders: {
        Authorization: 'shfjdshfalksdfjdlgjfld',
      },
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          this.authServ.logout();
          return EMPTY;
        } else {
          return throwError(() => error);
        }
      })
    );
  }
}
/* tap((event) => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log(event.status);
          console.log('Response arrived');
          if (event.status === HttpStatusCode.Ok) {
          }
        }
      })*/

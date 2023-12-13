import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";
import { TokenStorageService } from "../services/token-storage.service";

@Injectable()
export class OAuthtInterceptor implements HttpInterceptor {

    constructor( private router: Router, private injector: Injector, private tokenService: TokenStorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /* https://github.com/angular/angular/issues/18224#issuecomment-316971151 */
        const auth = this.injector.get(AuthService);
          request = request.clone({
            setHeaders: { Authorization: `Bearer ${this.tokenService.getToken()}` },
          });
    
        return next.handle(request).pipe(
          catchError((error) => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
              window.location.href = "";;
            }
    
            //auth.navigateToSignIn();
            return throwError(error);
          }),
        );
      }
}
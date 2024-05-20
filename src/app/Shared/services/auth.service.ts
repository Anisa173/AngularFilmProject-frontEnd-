import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserLogin } from '../models/user-login';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  private apiUrl = 'http://locahost:8080/api/auth';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.isLoggedIn()) {
      return true;
    }
    // navigate to login page as user is not authenticated
    this.router.navigate(['/userlogin/login']);
    return false;
  }
  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == 'true') {
      status = true;
    } else {
      status = false;
      this.router.navigate(['/userlogin']);
    }
    return status;
  }
  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('access_token');
  }

  login(email: string, password: string): Observable<UserLogin> {
    return this.http
      .post<UserLogin>('${this.apiUrl}/login', { email, password })
      .pipe(
        tap((loginResponse) => {
          console.log('User_Id is:', loginResponse.loginId);
          console.log('User_email is:', loginResponse.email);
          console.log('User_password is:', loginResponse.password);
          localStorage.setItem('access_token', loginResponse.jwt);
          localStorage.setItem('isLoggedIn', 'true');
        })
      );
  }
}

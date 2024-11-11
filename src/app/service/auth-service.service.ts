import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {LoginResponse} from "../model/LoginResponse";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://localhost:8080/user/login';
  isAutenticado: boolean = this.getAuthStatus();
  isAdmin: boolean = this.getAdminStatus();
  isManager: boolean = this.getManagerStatus();

  constructor(private router: Router, private http: HttpClient) {
  }

  /*
  login(username: string, password: string) {
    if (username && password) {
      if (username === 'admin' && password === 'admin') {
        this.setAuthState(true, true, false)
        this.router.navigate(['/dashboard']);
        return true;
      } else if (username === 'user' && password === 'user') {
        this.setAuthState(true, false, false)
        this.router.navigate(['/dashboard']);
        return true;
      } else if (username === 'manager' && password === 'manager') {
        this.setAuthState(true, true, true)
        this.router.navigate(['/dashboard']);
        return true;
      }
    }
    return false;
  }*/

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { username, password })
      .pipe(
        tap(response => {
          if (response.authenticated) {
            const isAdmin = response.roles?.includes('ADMIN') || false;
            const isManager = response.roles?.includes('MANAGER') || false;
            this.setAuthState(true, isAdmin, isManager);
            this.router.navigate(['/dashboard']);
          }
        })
      );
  }

  logout(): void {
    localStorage.clear();
    this.setAuthState(false, false, false)
    this.router.navigate(['/']);
  }

  private setAuthState(authStatus: boolean, adminStatus: boolean, managerStatus: boolean): void {
    this.isAutenticado = authStatus;
    this.isAdmin = adminStatus;
    this.isManager=managerStatus;
    localStorage.setItem('authStatus', JSON.stringify(authStatus));
    localStorage.setItem('adminStatus', JSON.stringify(adminStatus));
    localStorage.setItem('managerStatus', JSON.stringify(managerStatus));
  }

  private getAuthStatus(): boolean {
    return JSON.parse(localStorage.getItem('authStatus') || 'false');
  }

  private getAdminStatus(): boolean {
    return JSON.parse(localStorage.getItem('adminStatus') || 'false');
  }

  private getManagerStatus(): boolean {
    return JSON.parse(localStorage.getItem('managerStatus') || 'false');
  }
}

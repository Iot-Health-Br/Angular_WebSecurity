import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {LoginResponse} from "../model/LoginResponse";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  private urlLogin = 'http://localhost:8080/user/login';
  private urlSave = 'http://localhost:8080/user/save';
  isAutenticado: boolean = this.getAuthStatus();
  isUser: boolean = this.getUserStatus();
  isAdmin: boolean = this.getAdminStatus();
  isManager: boolean = this.getManagerStatus();

  constructor(private router: Router, private http: HttpClient, private messageService: MessageService) {
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.urlLogin, { username, password })
      .pipe(
        tap(response => {
          if (response.authenticated) {
              const isUser = response.roles?.includes('USER') || false;
              const isAdmin = response.roles?.includes('ADMIN') || false;
              const isManager = response.roles?.includes('MANAGER') || false;

              this.setAuthState(true, isUser, isAdmin, isManager);
              this.messageService.add({severity: 'success', summary: 'Sucesso', detail: response.message, life: 5000});
              this.router.navigate(['/dashboard']);}
          else {
              this.messageService.add({severity: 'error', summary: 'Erro', detail: response.message, life: 5000});}
        })
      );
  }

  saveUser(user: User): Observable<string> {
    return this.http.post(this.urlSave, user, { responseType: 'text' });
  }

  logout(): void {
    localStorage.clear();
    this.setAuthState(false, false, false, false)
    this.router.navigate(['/']);
  }

  private setAuthState(authStatus: boolean, userStatus: boolean, adminStatus: boolean, managerStatus: boolean): void {
    this.isAutenticado = authStatus;
    this.isUser = userStatus;
    this.isAdmin = adminStatus;
    this.isManager=managerStatus;
    localStorage.setItem('authStatus', JSON.stringify(authStatus));
    localStorage.setItem('userStatus', JSON.stringify(userStatus));
    localStorage.setItem('adminStatus', JSON.stringify(adminStatus));
    localStorage.setItem('managerStatus', JSON.stringify(managerStatus));
  }

  private getAuthStatus(): boolean {
    return JSON.parse(localStorage.getItem('authStatus') || 'false');
  }
  private getUserStatus(): boolean {
    return JSON.parse(localStorage.getItem('userStatus') || 'false');
  }

  private getAdminStatus(): boolean {
    return JSON.parse(localStorage.getItem('adminStatus') || 'false');
  }

  private getManagerStatus(): boolean {
    return JSON.parse(localStorage.getItem('managerStatus') || 'false');
  }
}

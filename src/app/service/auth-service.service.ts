import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAutenticado: boolean = this.getAuthStatus();
  isAdmin: boolean = this.getAdminStatus();
  isManager: boolean = this.getManagerStatus();

  constructor(private router: Router) {
  }

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

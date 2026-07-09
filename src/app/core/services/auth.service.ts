import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';
  private tokenKey = 'jwt_token';

  // State
  public isAuthenticated = signal<boolean>(false);
  public currentUserFullName = signal<string>('');

  constructor(private http: HttpClient) {
    this.checkInitialAuth();
  }

  private checkInitialAuth() {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(this.tokenKey);
      this.isAuthenticated.set(!!token);
    }
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((res: any) => {
        if (res && res.access_token) {
          this.setToken(res.access_token);
        }
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.tokenKey);
    }
    this.isAuthenticated.set(false);
  }

  private setToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.tokenKey, token);
    }
    this.isAuthenticated.set(true);
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }
}

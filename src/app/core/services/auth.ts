import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { LoginRequest, LoginResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.api}/auth/login`, data);
  }

  refresh(refreshToken: string) {
    return this.http.post(`${this.api}/auth/refresh`, {
      refreshToken
    });
  }

  logout() {
    return this.http.post(`${this.api}/auth/logout`, {});
  }

}

export class Auth {
}

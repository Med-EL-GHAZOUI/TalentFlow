import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken() {
    return localStorage.getItem('access_token');
  }

  getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  saveRefreshToken(token: string) {
    localStorage.setItem('refresh_token', token);
  }

  clear() {
    localStorage.clear();
  }

}

export class Token {
}

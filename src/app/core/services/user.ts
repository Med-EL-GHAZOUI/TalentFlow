import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  getAll() {
    return this.http.get(`${this.api}/users`);
  }

}

export class User {
}

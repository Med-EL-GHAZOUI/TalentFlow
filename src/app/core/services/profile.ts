import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends ApiService {

  getProfile() {
    return this.http.get(`${this.api}/profile`);
  }

}

export class Profile {
}

import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class SkillService extends ApiService {

  getAll() {
    return this.http.get(`${this.api}/skills`);
  }

}

export class Skill {
}

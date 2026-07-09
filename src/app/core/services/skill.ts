import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class SkillService extends ApiService {

  getAll() {
    return this.http.get(`${this.api}/skills`);
  }

  getById(id: number) {
    return this.http.get(`${this.api}/skills/${id}`);
  }

  create(data: any) {
    return this.http.post(`${this.api}/skills`, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.api}/skills/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/skills/${id}`);
  }

}

export class Skill {
}

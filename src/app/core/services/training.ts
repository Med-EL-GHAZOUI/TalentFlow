import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class TrainingService extends ApiService {

  getAll() {
    return this.http.get(`${this.api}/trainings`);
  }

  getById(id: number) {
    return this.http.get(`${this.api}/trainings/${id}`);
  }

  create(data: any) {
    return this.http.post(`${this.api}/trainings`, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.api}/trainings/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/trainings/${id}`);
  }
}

export class Training {
}

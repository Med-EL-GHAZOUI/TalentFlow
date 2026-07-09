import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class JobService extends ApiService {

  getAll() {
    return this.http.get(`${this.api}/jobs`);
  }

  getById(id: number) {
    return this.http.get(`${this.api}/jobs/${id}`);
  }

  create(data: any) {
    return this.http.post(`${this.api}/jobs`, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.api}/jobs/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/jobs/${id}`);
  }

}

export class Job {
}

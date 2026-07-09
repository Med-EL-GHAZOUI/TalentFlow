import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends ApiService {

  getAll() {
    return this.http.get(`${this.api}/departments`);
  }

  getById(id: number) {
    return this.http.get(`${this.api}/departments/${id}`);
  }

  create(data: any) {
    return this.http.post(`${this.api}/departments`, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.api}/departments/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/departments/${id}`);
  }

}

export class Department {
}

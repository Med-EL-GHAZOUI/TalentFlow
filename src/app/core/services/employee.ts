import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService {

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.api}/employees`);
  }

  getById(id: number) {
    return this.http.get<Employee>(`${this.api}/employees/${id}`);
  }

  create(employee: Employee) {
    return this.http.post(`${this.api}/employees`, employee);
  }

  update(id: number, employee: Employee) {
    return this.http.put(`${this.api}/employees/${id}`, employee);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/employees/${id}`);
  }

}

export class Employee {
}

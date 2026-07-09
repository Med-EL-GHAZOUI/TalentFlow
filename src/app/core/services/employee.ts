import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// @ts-ignore
import { Employee } from '../models/employee.model';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService {

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.api}/employees`);
  }

  getMyDashboard(): Observable<any> {
    return this.http.get(`${this.api}/employees/me/dashboard`);
  }

  getById(id: number) {
    return this.http.get<Employee>(`${this.api}/employees/${id}`);
  }

  create(employee: any) {
    return this.http.post(`${this.api}/employees`, employee);
  }

  update(id: number, employee: any) {
    return this.http.put(`${this.api}/employees/${id}`, employee);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/employees/${id}`);
  }

}

// @ts-ignore
export class Employee {
}

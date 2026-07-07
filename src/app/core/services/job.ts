import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class JobService extends ApiService {

  getAll() {
    return this.http.get(`${this.api}/jobs`);
  }

}

export class Job {
}

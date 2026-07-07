import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class TrainingService extends ApiService {

  getAll() {
    return this.http.get(`${this.api}/trainings`);
  }

}

export class Training {
}

import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends ApiService {

  getStatistics() {
    return this.http.get(`${this.api}/dashboard`);
  }

}

export class Dashboard {
}

import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class GpecService extends ApiService {

  getCompetencyGaps() {
    return this.http.get(`${this.api}/gpec/gaps`);
  }

  getRecommendations() {
    return this.http.get(`${this.api}/gpec/recommendations`);
  }

}

export class Gpec {
}

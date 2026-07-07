import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class GpecService extends ApiService {

  analyze() {
    return this.http.get(`${this.api}/gpec/analyze`);
  }

}

export class Gpec {
}

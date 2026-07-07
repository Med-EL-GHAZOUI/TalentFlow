import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  success(message: string) {
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }

}

export class Notification {
}

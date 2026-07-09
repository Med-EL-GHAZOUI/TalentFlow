import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      switch (error.status) {

        case 401:
          localStorage.clear();
          window.location.href = '/login';
          break;
        case 403:
          console.warn('Access denied');
          break;
        case 404:
          console.warn('Resource not found');
          break;
        case 500:
          console.error('Internal server error');
          break;
      }

      return throwError(() => error);

    })

  );

};

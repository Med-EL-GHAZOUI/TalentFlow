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

          alert('Access denied');

          break;

        case 404:

          alert('Resource not found');

          break;

        case 500:

          alert('Internal server error');

          break;

      }

      return throwError(() => error);

    })

  );

};

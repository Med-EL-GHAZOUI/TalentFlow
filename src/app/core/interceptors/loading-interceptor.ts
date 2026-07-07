import {
  HttpInterceptorFn
} from '@angular/common/http';

import {
  finalize
} from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('Loading...');

  return next(req).pipe(

    finalize(() => {

      console.log('Finished');

    })

  );

};

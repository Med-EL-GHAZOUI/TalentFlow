import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route) => {

  const router = inject(Router);

  const expectedRole = route.data['role'];

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (user.role === expectedRole) {
    return true;
  }

  router.navigate(['/dashboard']);

  return false;
};

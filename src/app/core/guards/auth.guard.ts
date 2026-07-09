import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};

export const publicGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    // If already authenticated, do not go to login, go to the respective dashboard
    const token = authService.getToken();
    let targetRoute = '/my-space';
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const role = payload.role?.toUpperCase();
        if (role) {
          switch(role) {
            case 'ADMIN': targetRoute = '/dashboard'; break;
            case 'RH': targetRoute = '/gpec-dashboard'; break;
            case 'MANAGER': targetRoute = '/team-space'; break;
            case 'EMPLOYEE': targetRoute = '/my-space'; break;
          }
        }
      } catch (e) {}
    }
    return router.createUrlTree([targetRoute]);
  }

  return true;
};

import { inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLoggedIn) {
    return true;
  }

  // Create a dummy session id
  const sessionId = 123456789;

  // Set our navigation extras object
  // that contains our global query params and fragment
  const navigationExtras: NavigationExtras = {
    queryParams: { session_id: sessionId },
    fragment: 'anchor',
  };

  // Redirect to the login page
  return router.createUrlTree(['/login'], navigationExtras);
};

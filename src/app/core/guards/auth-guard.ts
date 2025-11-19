import { CanActivateFn, Router } from '@angular/router';
import { Token } from '../services/token';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(Token);
  const router = inject(Router);

  if(tokenService.getToken() !== '') {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};

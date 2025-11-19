import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Token } from '../services/token';

export const loggedInGuard: CanActivateFn = (route, state) => {
const tokenService = inject(Token);
const router = inject(Router);
if(tokenService.getToken() === '') {
  return true;
} else {
  router.navigate(['/student/diploma']);
  return false;
}
};

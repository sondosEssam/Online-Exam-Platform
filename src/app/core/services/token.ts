import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Token {
  private token = signal('');
  readonly token$ = this.token.asReadonly();

  setToken(value: string) {
    document.cookie = `auth_token=${value}; path=/;`;
    this.token.set(value);
  }
  clearToken() {
    document.cookie = `auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    this.token.set('');
  }
  getToken(): string {
    this.token.set(document.cookie.split('; ').find(row => row.startsWith('auth_token='))?.split('=')[1] || '');
    return this.token();
  }

}

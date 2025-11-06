import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthChoice {
  authChoice: WritableSignal<'login'|'register'|'forgot-password'> = signal<'login'|'register'|'forgot-password'>('login');

  setAuthChoice(choice: 'login'|'register'|'forgot-password') {
    this.authChoice.set(choice);
  }
}

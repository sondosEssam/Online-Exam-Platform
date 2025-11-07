import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthChoice {
  authChoice: WritableSignal<'login'|'register'|'forgot-password'|'verify-otp'|'new-password'> = signal<'login'|'register'|'forgot-password'|'verify-otp'|'new-password'>('login');

  setAuthChoice(choice: 'login'|'register'|'forgot-password'|'verify-otp'|'new-password') {
    this.authChoice.set(choice);
  }
}

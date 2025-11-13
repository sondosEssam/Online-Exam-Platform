import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthChoice {
  authChoice: WritableSignal<'forget-password'|'verify-otp'|'new-password'> = signal<'forget-password'|'verify-otp'|'new-password'>('forget-password');

  setAuthChoice(choice: 'forget-password'|'verify-otp'|'new-password') {
    this.authChoice.set(choice);
  }
}

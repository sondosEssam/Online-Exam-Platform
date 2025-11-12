import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthChoice {
  authChoice: WritableSignal<'verify-otp'|'new-password'> = signal<'verify-otp'|'new-password'>('verify-otp');

  setAuthChoice(choice: 'verify-otp'|'new-password') {
    this.authChoice.set(choice);
  }
}

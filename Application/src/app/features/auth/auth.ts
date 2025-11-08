import { Component, inject } from '@angular/core';
import { Intro } from "./layout/intro/intro";
import { Login } from "./components/login/login";
import { AuthChoice } from './services/auth-choice';
import { Register } from "./components/register/register";
import { ForgetPassword } from "./components/forget-password/forget-password";
import { VerfiyOtp } from './components/verfiy-otp/verfiy-otp';
import { NewPassword } from './components/new-password/new-password';

@Component({
  selector: 'app-auth',
  imports: [Intro, Login, Register, ForgetPassword, VerfiyOtp, NewPassword],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  authChoiceService = inject(AuthChoice);
}

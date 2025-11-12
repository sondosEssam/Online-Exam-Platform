import { Component, inject } from '@angular/core';
import { Intro } from "./layout/intro/intro";
import { Login } from "./components/login/login";
import { AuthChoice } from './services/auth-choice';
import { Register } from "./components/register/register";
import { ForgetPassword } from "./components/forget-password/forget-password";
import { VerfiyOtp } from './components/verfiy-otp/verfiy-otp';
import { NewPassword } from './components/new-password/new-password';
import { RouterOutlet } from '@angular/router';
import { AuthNavBar } from './layout/auth-nav-bar/auth-nav-bar';

@Component({
  selector: 'app-auth',
  imports: [Intro, AuthNavBar, RouterOutlet],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  authChoiceService = inject(AuthChoice);
}

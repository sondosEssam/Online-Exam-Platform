import { Component, inject } from '@angular/core';
import { Intro } from "./layout/intro/intro";
import { RouterOutlet } from '@angular/router';
import { Login } from "./components/login/login";
import { AuthChoice } from './services/auth-choice';
import { Register } from "./components/register/register";
import { ForgetPassword } from "./components/forget-password/forget-password";

@Component({
  selector: 'app-auth',
  imports: [Intro, RouterOutlet, Login, Register, ForgetPassword],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  authChoiceService = inject(AuthChoice);
}

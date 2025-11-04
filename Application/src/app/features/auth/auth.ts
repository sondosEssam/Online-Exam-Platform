import { Component } from '@angular/core';
import { Intro } from "./layout/intro/intro";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [Intro, RouterOutlet],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {

}

import { Component } from '@angular/core';
import { AuthNavBar } from "../auth/layout/auth-nav-bar/auth-nav-bar";
import { SideBar } from "../../shared/UI/side-bar/side-bar";
import { Sidebar } from "./shared/sidebar/sidebar";
import { RouterOutlet } from '@angular/router';
import { Breedcamb } from "./shared/breedcamb/breedcamb";
@Component({
  selector: 'app-student',
  imports: [Sidebar, RouterOutlet, Breedcamb],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

}

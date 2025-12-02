import { Component } from '@angular/core';
import { BackButton } from "../../shared/back-button/back-button";
import { Headtag } from '../../shared/headtag/headtag';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [BackButton, Headtag, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {

}

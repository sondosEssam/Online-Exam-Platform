import { Component } from '@angular/core';
import { BackButton } from "../../shared/back-button/back-button";
import { Headtag } from '../../shared/headtag/headtag';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ColorDir } from '../../../../core/directives/color-dir';

@Component({
  selector: 'app-account',
  imports: [BackButton, Headtag, RouterOutlet, RouterLink, RouterLinkActive, ColorDir],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {

}

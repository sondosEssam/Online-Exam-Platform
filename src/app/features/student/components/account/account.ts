import { Component } from '@angular/core';
import { BackButton } from "../../shared/back-button/back-button";
import { Headtag } from '../../shared/headtag/headtag';

@Component({
  selector: 'app-account',
  imports: [BackButton, Headtag],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {

}

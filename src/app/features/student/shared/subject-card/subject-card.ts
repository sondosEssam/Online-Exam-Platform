import { Component, input } from '@angular/core';
import {  NgStyle } from "@angular/common";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-subject-card',
  imports: [ NgStyle, RouterLink],
  templateUrl: './subject-card.html',
  styleUrl: './subject-card.css',
})
export class SubjectCard {
backgroundUrl = input<string>('');
subject = input<string>();
_id = input<string>('');

}

import { Component, input } from '@angular/core';
import {  NgStyle } from "@angular/common";

@Component({
  selector: 'app-subject-card',
  imports: [ NgStyle],
  templateUrl: './subject-card.html',
  styleUrl: './subject-card.css',
})
export class SubjectCard {
backgroundUrl = input<string>('');
subject = input<string>();
}

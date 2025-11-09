import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
})
export class FormInput {
label = input<string>();
type = input('text');
placeHolder = input('');
errorMessage= input('Invalid Input');
@Input() control!: FormControl 
}

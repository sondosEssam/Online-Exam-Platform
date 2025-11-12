import { Component, inject } from '@angular/core';
import { AuthChoice } from '../../services/auth-choice';
import { AuthButton } from "../../layout/auth-button/auth-button";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputComponent } from 'ng-otp-input';
import { RouterLink } from "@angular/router";

  
@Component({
  selector: 'app-verfiy-otp',
  imports: [AuthButton, ReactiveFormsModule, NgOtpInputComponent, RouterLink],
  templateUrl: './verfiy-otp.html',
  styleUrl: './verfiy-otp.css',
})
export class VerfiyOtp {
authChoiceService = inject(AuthChoice);
  fb = inject(FormBuilder);
  form = this.fb.group({
    otp: ['']
  })

  onSubmit() {
    console.log(this.form.value);
    this.authChoiceService.setAuthChoice('new-password');
  }
}

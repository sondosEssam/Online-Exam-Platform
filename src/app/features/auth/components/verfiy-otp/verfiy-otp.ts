import { AuthChoice } from './../../services/auth-choice';
import { Component, effect, inject, input, signal } from '@angular/core';
import { AuthButton } from "../../layout/auth-button/auth-button";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputComponent } from 'ng-otp-input';
import { Router, RouterLink } from "@angular/router";
import { ModalService } from '../../../../shared/services/modal-service';
import { AuthLibraryService } from 'auth';

  
@Component({
  selector: 'app-verfiy-otp',
  imports: [AuthButton, ReactiveFormsModule, NgOtpInputComponent, RouterLink],
  templateUrl: './verfiy-otp.html',
  styleUrl: './verfiy-otp.css',
})
export class VerfiyOtp {
authChoiceService = inject(AuthChoice);
errorService = inject(ModalService);
authService = inject(AuthLibraryService);
counter = signal(120);
email = input<string>('');

fb = inject(FormBuilder);
  ngOnInit() {
    this.countdown();
  }

  form = this.fb.group({
    otp: ['']
  })
  setForgetPassword() {
    this.authChoiceService.setAuthChoice('forget-password');
  }

  resendCode() {
    this.authService.forgotPassword({email: this.email()}).subscribe({
      next: (res) => {
        this.errorService.triggerModal('A new code has been sent to your email', 'success');
      }
    });
  }
  onSubmit() {
    console.log(this.form.value);
    this.authService.verifyResetCode({resetCode:this.form.value.otp||''}).subscribe({
      next:(res)=>{
        this.errorService.triggerModal('Code verified successfully', 'success');
        this.authChoiceService.setAuthChoice('new-password');
      },
      error: (err: any) => {        
        this.errorService.triggerModal('Invalid code, please try again', 'error');
        this.form.reset();
        this.counter.set(120);
        this.authChoiceService.setAuthChoice('forget-password');
      }
      
    })
  }

  countdown() {
    if (this.counter() > 0) {
      setTimeout(() => {
        this.counter.update(value => value - 1);
        this.countdown();
      }, 1000);
    }
    if (this.counter() === 0) {
      this.setForgetPassword();
      this.errorService.triggerModal('No code was entered, try again', 'error');
    }
  }
}
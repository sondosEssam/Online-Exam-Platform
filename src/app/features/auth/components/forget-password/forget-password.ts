import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { NewPassword } from '../new-password/new-password';
import { VerfiyOtp } from '../verfiy-otp/verfiy-otp';

import { FormInput } from "../../../../shared/UI/form-input/form-input";
import { AuthButton } from "../../layout/auth-button/auth-button";

import { AuthChoice } from '../../services/auth-choice';
import { AuthLibraryService } from 'auth';

import { ModalService } from '../../../../shared/services/modal-service';

@Component({
  selector: 'app-forget-password',
  imports: [
    FormInput, ReactiveFormsModule,
    AuthButton, RouterLink, VerfiyOtp,
    NewPassword
  ],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {
fb = inject(FormBuilder);
authChoiceService = inject(AuthChoice);
authService = inject(AuthLibraryService);
errorService = inject(ModalService);

formForgetPassword = this.fb.group({
  email:['']
});

onSubmit(){
  this.authService.forgotPassword(this.formForgetPassword.value).subscribe({
    next: (res) => {
      this.authChoiceService.setAuthChoice('verify-otp');
    },
    error: (err) => {
      const msg = err?.error?.message ?? 'An unknown error occurred';
      this.errorService.triggerModal(msg, 'error');
    }
  });

}
}
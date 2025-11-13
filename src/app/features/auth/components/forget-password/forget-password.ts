import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { NewPassword } from '../new-password/new-password';
import { VerfiyOtp } from '../verfiy-otp/verfiy-otp';

import { FormInput } from "../../../../shared/UI/form-input/form-input";
import { AuthButton } from "../../layout/auth-button/auth-button";

import { AuthChoice } from '../../services/auth-choice';

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
formForgetPassword = this.fb.group({
  email:['']
});

onSubmit(){
  console.log(this.formForgetPassword.value);
  this.authChoiceService.setAuthChoice('verify-otp');

}
}
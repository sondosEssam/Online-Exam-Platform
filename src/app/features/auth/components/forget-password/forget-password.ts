import { Component, inject } from '@angular/core';
import { FormInput } from "../../../../shared/UI/form-input/form-input";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthButton } from "../../layout/auth-button/auth-button";
import { AuthChoice } from '../../services/auth-choice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [FormInput, ReactiveFormsModule, AuthButton, RouterLink],
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
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthButton } from '../../layout/auth-button/auth-button';
import { FormInput } from '../../../../shared/UI/form-input/form-input';
import { AuthChoice } from '../../services/auth-choice';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-password',
  imports: [ReactiveFormsModule, AuthButton, FormInput, RouterLink],
  templateUrl: './new-password.html',
  styleUrl: './new-password.css',
})
export class NewPassword {
  fb = inject(FormBuilder);
  router = inject(Router);
  authChoiceService = inject(AuthChoice);
  registerForm = this.fb.group({
    password: [''],
    repassword: [''],
  });
setForgetPassword() {
    this.authChoiceService.setAuthChoice('forget-password');
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.setForgetPassword()
    this.router.navigate(['/auth/login']);
  }

}


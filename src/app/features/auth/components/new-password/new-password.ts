import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthButton } from '../../layout/auth-button/auth-button';
import { FormInput } from '../../../../shared/UI/form-input/form-input';
import { AuthChoice } from '../../services/auth-choice';

@Component({
  selector: 'app-new-password',
  imports: [ReactiveFormsModule, AuthButton, FormInput],
  templateUrl: './new-password.html',
  styleUrl: './new-password.css',
})
export class NewPassword {
  fb = inject(FormBuilder);
  authChoiceService = inject(AuthChoice);
  registerForm = this.fb.group({
    password: [''],
    repassword: [''],
  });


  onSubmit() {
    console.log(this.registerForm.value);
    this.authChoiceService.setAuthChoice('login');
  }
  setAuthChoiceRegister(){
    this.authChoiceService.setAuthChoice('register');
  }
}


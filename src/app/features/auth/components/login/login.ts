import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthChoice } from '../../services/auth-choice';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInput } from "../../../../shared/UI/form-input/form-input";
import { AuthButton } from '../../layout/auth-button/auth-button';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormInput, AuthButton, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  fb = inject(FormBuilder);
  form = this.fb.group({
    email:['', Validators.required, Validators.email],
    password:['', Validators.required, Validators.minLength(6)],
    age:['']
  })

authChoiceService = inject(AuthChoice);

onSubmit(){
  console.log(this.form.value)
}
}

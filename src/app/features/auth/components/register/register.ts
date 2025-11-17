import { Component, inject } from '@angular/core';
import { AuthChoice } from '../../services/auth-choice';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInput } from "../../../../shared/UI/form-input/form-input";
import { AuthButton } from '../../layout/auth-button/auth-button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaterialIntlTelInputComponent  } from 'ngx-material-intl-tel-input';
import { NgClass } from '@angular/common';
import { RouterLink } from "@angular/router";
import { AuthLibraryService } from 'auth';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FormInput, AuthButton, MatFormFieldModule, MatInputModule, NgxMaterialIntlTelInputComponent, NgClass, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
authChoiceService = inject(AuthChoice);
_authService = inject(AuthLibraryService);


fb = inject(FormBuilder);
registerForm = this.fb.group({
  username:['', Validators.required],
  firstName:['',Validators.required],
  lastName:['',Validators.required],
  email:['',Validators.required],
  password:['',(Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/))],
  rePassword:['',Validators.required],
  phone:['',Validators.required, [Validators.pattern(/^\+?\d{10,15}$/)]],

})


onSubmit(){
const body ={
    ...this.registerForm.value,
    phone:this.registerForm.value.phone?.replace(/\s+/g, '')
  }

  if(this.registerForm.valid){
  this._authService.register(body).subscribe(res=>{
    console.log(res)
  });
  
}
}
}

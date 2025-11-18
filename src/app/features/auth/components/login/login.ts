import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthChoice } from '../../services/auth-choice';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInput } from "../../../../shared/UI/form-input/form-input";
import { AuthButton } from '../../layout/auth-button/auth-button';
import {AuthLibraryService} from 'auth'
import { ModalService } from '../../../../shared/services/modal-service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormInput, AuthButton, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

 _authService = inject(AuthLibraryService)
  router = inject(Router)
  fb = inject(FormBuilder);
  authChoiceService = inject(AuthChoice);

  modalService = inject(ModalService);


  serverErrorMessage: string = '';
  form = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })


onSubmit(){
  
  if(this.form.valid){
  this._authService.login(this.form.value).subscribe({
    next: (res) => {
      console.log(res);
            this.form.reset();
      this.router.navigate(['/student/diploma']).then(() => {

      this.modalService.triggerModal('Login Successful', 'success');
        });    },
    error: (err) => {
      console.log(err.error.message);
      this.modalService.triggerModal(err.error.message, 'error');
    }
  });
}
}}
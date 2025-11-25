import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthButton } from '../../layout/auth-button/auth-button';
import { FormInput } from '../../../../shared/UI/form-input/form-input';
import { AuthChoice } from '../../services/auth-choice';
import { Router, RouterLink } from '@angular/router';
import { AuthLibraryService } from 'auth';
import { ModalService } from '../../../../shared/services/modal-service';

@Component({
  selector: 'app-new-password',
  imports: [ReactiveFormsModule, AuthButton, FormInput, RouterLink],
  templateUrl: './new-password.html',
  styleUrl: './new-password.css',
})
export class NewPassword {

  email= input<string>('');

  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthLibraryService)
  authChoiceService = inject(AuthChoice);
  modalService = inject(ModalService);
  form = this.fb.group({
    newPassword:['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    confirmPassword:['', Validators.required],
  });

setForgetPassword() {
    this.authChoiceService.setAuthChoice('forget-password');
  }

  onSubmit() {
    const newPasswordData = {
      newPassword: this.form.controls.newPassword.value || '',
      email: this.email()
    };
    if(this.form.controls.newPassword.value !== this.form.controls.confirmPassword.value){
      this.modalService.triggerModal('Passwords do not match', 'error');
      return;
    }

    this.authService.resetPassword(newPasswordData).subscribe({
      next: (res) => {
        this.setForgetPassword()
        this.router.navigate(['/auth/login']).then(()=>{
          this.modalService.triggerModal('Password changed successfully', 'success');
        })
      },
      error: (err) => {
        const msg = err?.error?.message ?? 'An unknown error occurred';
        this.modalService.triggerModal(msg, 'error');
        this.setForgetPassword();
        this.router.navigate(['/auth/login']);
      }
    });
  }

}


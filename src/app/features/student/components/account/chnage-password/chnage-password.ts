import { Component, inject } from '@angular/core';
import { FormInput } from '../../../../../shared/UI/form-input/form-input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthLibraryService } from 'auth';
import { ModalService } from '../../../../../shared/services/modal-service';
import { Router } from '@angular/router';
import { ColorDir } from "../../../../../core/directives/color-dir";

@Component({
  selector: 'app-chnage-password',
  imports: [FormInput, ReactiveFormsModule, ColorDir],
  templateUrl: './chnage-password.html',
  styleUrls: ['./chnage-password.css'],
})
export class ChnagePassword {
  fb = new FormBuilder();
  authService =  inject(AuthLibraryService);
  modalService = inject(ModalService);
  router = inject(Router);
  form = this.fb.group({
    oldPassword: ['',[Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    password: ['',[Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    rePassword: ['',[Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]]
  });

  onSubmit() {


    if (this.form.valid) {
      if(this.form.value.password === this.form.value.rePassword && this.form.value.password === this.form.value.oldPassword){
        this.modalService.triggerModal('New password cannot be the same as the old password', 'error');
        return;
      }

      this.authService.changePassword(this.form.value).subscribe({
        next: (res) => {
          this.modalService.triggerModal('Password changed successfully', 'success');
          this.form.reset();
          this.router.navigate(['/student/diploma']);
        },
        error: (err) => {
          const msg = err?.error?.message ?? 'An unknown error occurred';
          this.modalService.triggerModal(msg, 'error');
        }
      });
      }
  }
}
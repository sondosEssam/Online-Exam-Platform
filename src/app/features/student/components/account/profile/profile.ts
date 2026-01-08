import { UserInfo } from './../../../services/user-info';
import { Component, effect, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInput } from '../../../../../shared/UI/form-input/form-input';
import { ColorDir } from "../../../../../core/directives/color-dir";
import { AuthLibraryService } from 'auth';
import { ModalService } from '../../../../../shared/services/modal-service';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogComponent } from "../../../../../shared/UI/confirm-dialog/confirm-dialog";
import { Router } from '@angular/router';
import { Token } from '../../../../../core/services/token';

@Component({
  selector: 'app-profile',
  imports: [FormInput, ColorDir, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],

})
export class Profile implements OnInit {



fb = inject(FormBuilder);
UserInfoService = inject(UserInfo);
AuthService =  inject(AuthLibraryService);
modalService = inject(ModalService);
profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  username: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  phone: ['', Validators.required],
})
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService, 
      private authService: AuthLibraryService, private router:Router, private token:Token
    ) {}
    confirm() {
      console.log('happend');
      
        this.confirmationService.confirm({
            header: 'Are you sure you want to delete your account?',
            message: 'This action is permanent and cannot be undone.',
            accept: () => {
                this.authService.deleteMe().subscribe({
                  next: (res) => {
                    console.log(res);
                    this.modalService.triggerModal('Account deleted successfully');
                    this.token.clearToken();
                    this.router.navigate(['/auth/login']);
                  },
                  error: (err) => {
                    console.log(err);
                    this.modalService.triggerModal('An error occurred while deleting the account', 'error');
                  }
                });
            },
            reject: () => {

            },
        });
    }


 formEffect = effect(() => {
    const data = this.UserInfoService.userInfo();

    if (data) {
      this.profileForm.patchValue(data);
    }
  });

ngOnInit(): void {

      this.UserInfoService.getUserInfo();
}
onSubmit(){
  if(this.profileForm.valid){
  this.AuthService.editProfile(this.profileForm.value).subscribe({
    next: (res) => {  
    console.log(res)
    this.modalService.triggerModal('Profile updated successfully');
    this.profileForm.markAsTouched();
    this.profileForm.markAsPristine();
  },
  error: (err) => {
    console.log(err);
    this.modalService.triggerModal('An error occurred while updating the profile', 'error');
  }
});
  }
}
}

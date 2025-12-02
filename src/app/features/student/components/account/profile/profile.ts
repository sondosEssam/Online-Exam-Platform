import { UserInfo } from './../../../services/user-info';
import { Component, effect, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInput } from '../../../../../shared/UI/form-input/form-input';
import { ColorDir } from "../../../../../core/directives/color-dir";
import { AuthLibraryService } from 'auth';
import { ModalService } from '../../../../../shared/services/modal-service';

@Component({
  selector: 'app-profile',
  imports: [FormInput, ColorDir, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
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

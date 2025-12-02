import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { AuthLibraryService } from 'auth';

export interface IUserInfo {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
}


@Injectable({
  providedIn: 'root',
})
export class UserInfo {
userInfo:WritableSignal<IUserInfo|null> = signal(null);
authLibraryService = inject(AuthLibraryService);
getUserInfo(){
   this.authLibraryService.getUserInfo().subscribe({
    next:(res)=>{
      
      let user = res.user;

      this.userInfo.set({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone
      });
    }
  });
}


}
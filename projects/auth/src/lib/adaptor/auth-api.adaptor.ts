import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';

export interface AuthAdapted {
message:string,
token: string,
user:  
{
  _id: string,
username:string,
 firstName: string,
lastName: string
createdAt: string,
email: string,
isVerified: boolean,
passwordResetCode: string,
passwordResetExpires: string,
phone: string,
resetCodeVerified: boolean,
role: string,
}
}

export interface AuthApiAdaptor {
  message:string,
  token: string,
  email: string
}
@Injectable({
  providedIn: 'root',
})
export class AuthApiAdaptorService implements Adaptor {
  adapt(data: AuthAdapted): AuthApiAdaptor {
    return {
      message: data.message,
      token: data.token,
      email: data.user.email
    }
  }

}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthApi } from './base/AuthApi';
import { Observable } from 'rxjs/internal/Observable';
import { AuthEndPoint } from './enums/authEndPoint';
import { AuthAdapted, AuthApiAdaptor, AuthApiAdaptorService } from './adaptor/auth-api.adaptor';
import { map } from 'rxjs/internal/operators/map';
import * as authData from './interfaces/auth-data';
@Injectable({
  providedIn: 'root',
})
export class AuthLibraryService implements AuthApi {
  _httpClient = inject(HttpClient);
  _AuthApiAdaptorService = inject(AuthApiAdaptorService);

  login(data:authData.loginData): Observable<AuthApiAdaptor> {
    return this._httpClient.post<AuthAdapted>(AuthEndPoint.LOGIN, data).pipe(map(res=>this._AuthApiAdaptorService.adapt(res))
  );
  }

  register(data: authData.registerData): Observable<AuthApiAdaptor> {
    return this._httpClient.post<AuthAdapted>(AuthEndPoint.REGISTER, data).pipe(map(res=>this._AuthApiAdaptorService.adapt(res)));
  }

 forgotPassword(data: authData.forgetPasswordPasswordData): Observable<number> {
    return this._httpClient.post<AuthAdapted>(AuthEndPoint.FORGOT_PASSWORD, data, {observe: 'response'}).pipe(map(res=>res.status),
    );
}

  verifyResetCode(data: authData.verifyResetCodeData): Observable<number> {
    return this._httpClient.post<AuthAdapted>(AuthEndPoint.RESET_CODE, data, {observe: 'response'}).pipe(map(res=>res.status),);  
  }
  
  resetPassword(data: authData.resetPasswordData): Observable<AuthApiAdaptor> {
    return this._httpClient.put<AuthAdapted>(AuthEndPoint.RESET_PASSWORD, data).pipe(map(res=>this._AuthApiAdaptorService.adapt(res))
    );
  }

  changePassword(data: any): Observable<any> {
    return this._httpClient.patch(AuthEndPoint.CHANGE_PASSWORD, data);
  }

  deleteMe(data: any): Observable<any> {
    // Implement deleteMe logic
    return this._httpClient.post(AuthEndPoint.DELETEMYACCOUNT, data);
  }

  editProfile(data: any): Observable<any> {
    // Implement editProfile logic
    return this._httpClient.post(AuthEndPoint.EDITPROFILE, data);
  }

  logout(data: any): Observable<any> {
    // Implement logout logic
    return this._httpClient.post(AuthEndPoint.LOGOUT, data);
  }
}

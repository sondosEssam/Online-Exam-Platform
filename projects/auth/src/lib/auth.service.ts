import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthApi } from './base/AuthApi';
import { Observable } from 'rxjs/internal/Observable';
import { AuthEndPoint } from './enums/authEndPoint';
import { AuthApiAdaptorService } from '../public-api';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthApi {
  _httpClient = inject(HttpClient);
  _AuthApiAdaptorService = inject(AuthApiAdaptorService);

  login(data: any): Observable<any> {
    // Implement login logic
    return this._httpClient.post(AuthEndPoint.LOGIN, data).pipe(map(res=>this._AuthApiAdaptorService.adapt(res)));
  }

  register(data: any): Observable<any> {
    // Implement register logic
    return this._httpClient.post(AuthEndPoint.REGISTER, data);
  }

  changePassword(data: any): Observable<any> {
    // Implement changePassword logic
    return this._httpClient.post(AuthEndPoint.CHANGE_PASSWORD, data);
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

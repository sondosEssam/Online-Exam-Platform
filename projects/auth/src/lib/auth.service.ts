import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthApi } from './base/AuthApi';
import { Observable } from 'rxjs/internal/Observable';
import { AuthEndPoint } from './enums/authEndPoint';
import { AuthApiAdaptorService } from './adaptor/auth-api.adaptor';
import { map } from 'rxjs/internal/operators/map';
import { catchError, throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class AuthLibraryService implements AuthApi {
  _httpClient = inject(HttpClient);
  _AuthApiAdaptorService = inject(AuthApiAdaptorService);

  login(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.LOGIN, data).pipe(map(res=>this._AuthApiAdaptorService.adapt(res)),
  catchError((error)=> throwError(()=>of(error)))
  );
  }

  register(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.REGISTER, data).pipe(map(res=>this._AuthApiAdaptorService.adapt(res)),
    catchError((error)=>throwError(()=>of(error)))
    );
  }

 forgotPassword(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.FORGOT_PASSWORD, data, {observe: 'response'}).pipe(map(res=>res.status),
    catchError((error)=>throwError(()=>of(error)))
    );
}

  verifyResetCode(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.RESET_CODE, data).pipe(catchError((error)=>throwError(()=>of(error)))
    );
  }

  changePassword(data: any): Observable<any> {
    return this._httpClient.patch(AuthEndPoint.CHANGE_PASSWORD, data).pipe(map(res=>this._AuthApiAdaptorService.adapt(res)),
    catchError((error)=>throwError(()=>of(error)))
    );
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

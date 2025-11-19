import { HttpErrorResponse, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { Token } from "../services/token";
import { of } from "rxjs";
export function authInterceptor(req:HttpRequest<any>, next:HttpHandlerFn){
const tokenService = inject(Token);
const token = tokenService.getToken();
let authReq = req
if(token){
    authReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });
}
return next(authReq).pipe(

catchError((error: HttpErrorResponse)=>{

    let message = error.error?.message || 'An unknown error occurred';
    if(error.status===0){
        //handle network error
        message = 'Network error: Please check your internet connection.';
    }
    else if(error.status>=500){
        //handle server error
        message = 'Server error: Please try again later.';
    }
    if(req.url.includes('/auth/signin')){
    if(error.status===401){
        //handle unauthorized error
       message = 'invalid email or password'
    }}


    //regsiter error handling can be added here
    else if(req.url.includes('/auth/signup')){
        if(error.status===409 && error.error?.message.includes('email already exists')){
            //handle conflict error
           message = 'Email already in use. Please use a different email.';
        }
        else if(error.status===409 && error.error?.message.includes('username already exists')){
            message = 'Username already exists. Please choose a different username.';
        }
        else if(error.status===401 &&error.error?.message.includes('\"rePassword\" must be [ref:password]')){
            message = 'Passwords do not match. Please re-enter your password.';
        }
    }


    //forget password  
    else if(req.url.includes('/auth/change-password')){
        if(error.status===404){
            message = 'Email not found. Please check and try again.';
        }}

    return throwError(() =>({...error, error: {...error.error, message}}));
}) 
,

);
}
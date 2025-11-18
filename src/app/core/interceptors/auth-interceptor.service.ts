import { HttpErrorResponse, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export function authInterceptor(req:HttpRequest<any>, next:HttpHandlerFn){

return next(req).pipe(

catchError((error: HttpErrorResponse)=>{
    console.log('http error', error);
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
    console.log(error);
    
    return throwError(() =>({...error, error: {...error.error, message}}));
})

);
}
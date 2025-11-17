import { Observable } from "rxjs";

export abstract class AuthApi {
    abstract login(data:any):Observable<any>;
    abstract register(data:any):Observable<any>;
    abstract changePassword(data:any):Observable<any>;
    abstract deleteMe(data:any):Observable<any>;
    abstract editProfile(data:any):Observable<any>;
    abstract logout(data:any):Observable<any>;
}
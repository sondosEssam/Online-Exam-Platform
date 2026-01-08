import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BaseUrl } from 'auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Subjects {
  private _httpClient = inject(HttpClient);
  private baseUrl = inject(BaseUrl);
  getSubjects() {
    return this._httpClient.get(`${this.baseUrl}/subjects`).pipe(map((res:any)=>res.subjects));
  }
  getSububjectById(id:string) {
    return this._httpClient.get(`${this.baseUrl}/subjects/${id}`).pipe(map((res:any)=>res.subject));
  }
}

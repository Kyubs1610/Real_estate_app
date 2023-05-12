import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



const BASEURL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})

export class PasswordResetService {
  constructor(private http: HttpClient) {}

 

  resetPassword(newPassword: string, confirmNewPassword: string) {
    const body = { newPassword, confirmNewPassword};
    return this.http.post(`${BASEURL}resetPassword'`, body);
  }
}

import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


const BASEURL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  resetPassword(token: string, id: string, body: any, callBack: Function, errorCallBack: Function) {
    this.http
      .patch(`${BASEURL}/v1/auth/resetPassword/id/${id}/token/${token}`, body)
      .subscribe({
        next: (res: any) => {
          callBack(res);
          // Redirect to login
          this.router.navigate(['/']);
        },
        error: (error: HttpErrorResponse) => {
          errorCallBack(error);
        }
      });
    }
  }
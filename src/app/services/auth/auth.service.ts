import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthResponseMail } from '../../models/AuthResponse.model';

const BASEURL = 'http://192.168.1.254:3000/';
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService // Inject CookieService
  ) {}


  logIn(email: string, password: string): Observable<AuthResponseMail> {
    const body = { email, password };
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     };
    return this.http.post<AuthResponseMail>(`${BASEURL}v1/auth/login`, body, options).pipe(
      tap(response => {
        console.log('response from server', response.info.token);
        console.log('response from server', response.reset);
        
        // Set the authentication cookie with URL encoding using CookieService
        this.cookieService.set('authToken', response.info.token);
        // Set the authenticated flag
        this.authenticated = true;
      // Check if it's the user's first login
      if (response.reset === true) {
        // Redirect to the reset password page
        this.router.navigate(['/email']);
      } else {
        // Redirect to the homepage
        this.router.navigate(['/homepage']);
      }
    })
  );
}

  logOut(): void {
    
    if (this.isAuthenticated()) {
      // Remove the authentication cookie using CookieService
      this.cookieService.delete('authToken', '/');
      console.log('cookie', this.cookieService.get('authToken'));
      // Set the authenticated flag
      this.authenticated = false;
      // Navigate to login page
      this.router.navigate(['/']);
    }
  }

  isAuthenticated(): boolean {
    // Get the authentication cookie using CookieService
    const authToken = this.cookieService.get('authToken');
    return authToken !== null && authToken !== '';
  }
}

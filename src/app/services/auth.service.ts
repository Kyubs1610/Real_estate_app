import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


interface AuthResponse {
  message: string;
  info: {
    fullname: string;
    token: string;
  };
  reset: boolean;
}

const BASEURL = 'http://localhost:3000/';

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


  logIn(email: string, password: string): Observable<AuthResponse> {
    const body = { email, password };
    const options = { withCredentials: true }; // send the info with the cookie
    return this.http.post<AuthResponse>(`${BASEURL}v1/auth/login`, body, options).pipe(
      tap(response => {
        console.log('response from server', response.info.token);
        console.log('cookie', this.cookieService.get('authToken'));
        // Set the authentication cookie with URL encoding using CookieService
        this.cookieService.set('authToken', response.info.token, 2, '/');
        // Set the authenticated flag
        this.authenticated = true;
      // Check if it's the user's first login
      if (response.reset) {
        // Redirect to the reset password page
        this.router.navigate(['/reset']);
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
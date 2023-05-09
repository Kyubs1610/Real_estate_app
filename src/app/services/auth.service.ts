import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

interface AuthResponse {
  message: string;
  info: {
    fullname: string;
    token: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  logIn(email: string, password: string): Observable<AuthResponse> {
    const body = { email, password };
    return this.http.post<AuthResponse>('https://b1de-194-78-194-166.ngrok-free.app/v1/auth/login', body).pipe(
      tap(response => {
        console.log('response from server', response.info.token);
        // Set the authentication cookie with URL encoding
        document.cookie = `authToken=${encodeURIComponent(response.info.token)}`;
        // Set the authenticated flag
        this.authenticated = true;
        // Navigate to homepage
        this.router.navigate(['/homepage']);
      })
    );
  }

  logOut(): void {
    // Calculate the expiration time to 24 hours from the current time
    const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
    // Set the authentication cookie with the calculated expiration time
    document.cookie = `authToken=;expires=${expirationDate.toUTCString()}`;
    // Set the authenticated flag
    this.authenticated = false;
    // Navigate to login page
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }


}


import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, CanActivate, UrlTree } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private authenticated: boolean = false;

  constructor(private cookieService: CookieService, 
              private router: Router, 
              private http: HttpClient
              ) {}
  private apiUrl = 'https://1303-194-78-194-166.ngrok-free.app';
  
  logIn(email: string, password: string) {
    // Send HTTP POST request to server to authenticate user
    // If authentication is successful, set the authentication cookie
    this.cookieService.set('authToken', 'res.info.token');
    this.authenticated = true;
    // Navigate to homepage
    // this.router.navigate(['/homepage']);
    return this.http.post(`${this.apiUrl}/v1/auth/login`, { email, password });

  }

    logOut(): void {
      // Clear the authentication cookie
      this.cookieService.delete('res.info.token');
      this.authenticated = false;
      // Navigate to login page
      this.router.navigate(['/']);
    }

  isAuthenticated(): boolean {
    // Check if the authentication cookie is present
    const authToken = this.cookieService.get('authToken');
    
    return this.authenticated || !!authToken;
  }
   canActivate(): true |UrlTree {
    return this.authenticatedOrRedirect();
  }

  authenticatedOrRedirect(): true | UrlTree {
    if (this.isAuthenticated()) {
      return true;
    } else {
      return this.router.parseUrl('');
    }
  }

}


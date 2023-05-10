import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if (this.auth.isAuthenticated()) {
            // If user is already authenticated, redirect to homepage
            this.router.navigate(['/homepage']);
            return false;
          } else {
            // If user is not authenticated, redirect to login page
            this.router.navigate(['']);
            return true;
          }
        }
    }
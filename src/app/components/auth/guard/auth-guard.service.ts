import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(public auth: AuthService, public router: Router) { }

    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) { // If the user isn't authenticated
            this.router.navigate(['app-login']); // Route back to login
            return false; // Return false for canActivate, blocking them from gaining access
        }
        return true; // Return true allowing them to access the guarded route 
    }
}
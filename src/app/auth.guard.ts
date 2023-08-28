import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        const userToken = localStorage.getItem('userToken');
        const isAuthenticated = userToken !== null && userToken !== '';
        console.log("user token trae? ", userToken);

        if (!isAuthenticated) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
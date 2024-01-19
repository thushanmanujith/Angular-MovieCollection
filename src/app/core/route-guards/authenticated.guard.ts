import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate, CanLoad {
    constructor(private router: Router, private auth: AuthService) {}
    
    validateURL(toURL: string): boolean {
    if (!this.auth.isOAuthTokenValid) {
            this.auth.redirectURL = toURL;
            this.redirectToLogin();
            return false;
        }
        return true;
    }

    redirectToLogin() {
        const pathToGo = '/';
        this.router.navigate([pathToGo]);
    }

    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.validateURL(state.url);
    }
    
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
    
    canLoad(route: Route): boolean {
        const url = `/${route.path}`;
        return this.validateURL(url);
    }
}

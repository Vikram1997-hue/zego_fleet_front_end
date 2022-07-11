import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Router,Route, RouterStateSnapshot } from '@angular/router';
import { RouteConfig } from '../config/route-config';
import { LocalService } from '../services/local.service';

/****************************************************************************
@PURPOSE      : Dont allow public pages to get accessed. (After Login) (APPLY ON PUBLIC PAGES)
@PARAMETERS   : N/A
@RETURN       : <boolean>
/****************************************************************************/
@Injectable()
export class CanLoginActivate implements CanActivate {
    constructor(public router: Router, private storageService: LocalService) {}

        canActivate() {
        if (!this.storageService.getItem('hmAccessToken')) {
            return true;
        } else {
            this.router.navigate([RouteConfig.vehicle.url]);
            return false;
        }

    }
}

/****************************************************************************/

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad, CanActivateChild {

    constructor(private router: Router, private storageService: LocalService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let url = state.url;
        return this.checkLogin(url);
    }

    canLoad(route: Route): boolean {
        let url = route.path;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string) {
        if (this.storageService.getItem('hmAccessToken')) {
            return true;
        }
        this.router.navigate([RouteConfig.signin.url]);
        return false;
    }
}
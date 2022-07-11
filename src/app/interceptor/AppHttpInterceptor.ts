import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { map, catchError, timeout} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { LocalService } from '../services/local.service';
import { RouteConfig } from '../config/route-config';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private storageService: LocalService,
    ){ }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let apiToken= this.storageService.getItem('hmAccessToken');

        if (!request.headers.has('Content-Type')) {
            request= request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        if (!request.headers.has('Accept')) {
            request= request.clone({ headers: request.headers.set('Accept', '*/*') });
        }
        if (apiToken) {
            request = request.clone({ headers: request.headers.set('Authorization', apiToken) });
        }
    
        return next.handle(request).pipe(
            timeout(25000),
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if(error.error.message.includes('Invalid token')){
                    this.logout();
                }
                if(error.error.status==403){
                   this.logout();
                }
                if(error.error.status==401){
                    this.logout();
                 }
                return throwError(error);
            })
        )}


    logout(){
        this.storageService.setdashboardData({})
        const currentlng=this.storageService.getItem('currentlang') || 'en'
        this.storageService.removeAllItem();
        this.storageService.setItem('currentlang',currentlng)
        this.router.navigate([RouteConfig.signin.url]);
    }
}
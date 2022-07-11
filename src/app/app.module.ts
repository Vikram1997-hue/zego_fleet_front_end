import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppHttpInterceptor } from './interceptor/AppHttpInterceptor';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService, CanLoginActivate } from './interceptor/auth.guard';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    BrowserAnimationsModule,
    NgbModule,
    ColorPickerModule,
    NgxShimmerLoadingModule
  ],
  providers: [
    CookieService,
    AuthGuardService,
    CanLoginActivate,
    { 
      provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true,
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
 }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/../assets/i18n/', '.json');
}

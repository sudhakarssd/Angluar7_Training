import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header.component';
import { DataBindingComponent } from './data-binding.component';
import { CustomerModule } from './customer/customer.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users/users.module';
import { AppSharedModule } from './app-shared/app-shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './route-config';
import { XsrfInterceptorService } from './app-shared/xsrf-interceptor.service';
import { ChangeDetectionComponent, SimpleComponent } from './change-detection/change-detection.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent, HelloComponent, HeaderComponent, DataBindingComponent, RxjsComponent, ChangeDetectionComponent, SimpleComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                CustomerModule,
                ReactiveFormsModule,
                HttpClientModule,
                BrowserAnimationsModule,
                UsersModule,
                AppSharedModule,
                RouterModule.forRoot(routes)
            ],
            providers: [{ provide: HTTP_INTERCEPTORS, useClass: XsrfInterceptorService, multi: true }],
            //bootstrap: [AppComponent,HelloComponent]
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map
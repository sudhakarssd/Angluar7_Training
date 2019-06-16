import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ForbiddenNamesValidatorDirective } from './ForbiddenNamesValidator';
import { AuthGuardService } from './auth-guard.service';
var AppSharedModule = /** @class */ (function () {
    function AppSharedModule() {
    }
    AppSharedModule = tslib_1.__decorate([
        NgModule({
            declarations: [HighlightDirective, ForbiddenNamesValidatorDirective],
            imports: [
                CommonModule
            ],
            exports: [HighlightDirective, ForbiddenNamesValidatorDirective],
            //providers:[{provide: AuthGuardService, useClass:AuthGuardService}]
            providers: [AuthGuardService]
        })
    ], AppSharedModule);
    return AppSharedModule;
}());
export { AppSharedModule };
//# sourceMappingURL=app-shared.module.js.map
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var XsrfInterceptorService = /** @class */ (function () {
    function XsrfInterceptorService() {
    }
    XsrfInterceptorService.prototype.intercept = function (req, next) {
        console.log("XsrfInterceptorService");
        var token = sessionStorage.getItem("AUTH_TOKEN");
        if (!token) {
            return next.handle(req);
        }
        else {
            var modifiedRequest = req.clone({
                setHeaders: { "x-access-token": token }
            });
            return next.handle(modifiedRequest);
        }
    };
    XsrfInterceptorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], XsrfInterceptorService);
    return XsrfInterceptorService;
}());
export { XsrfInterceptorService };
//# sourceMappingURL=xsrf-interceptor.service.js.map
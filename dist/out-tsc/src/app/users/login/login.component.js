import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(activatedRoute, router, http) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.message = "Hello World";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formGroup = new FormGroup({
            username: new FormControl("", [Validators.required]),
            password: new FormControl("", [Validators.required])
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.formGroup.valid) {
            var userName = this.formGroup.get("username").value;
            var password = this.formGroup.get("password").value;
            var headers = new HttpHeaders()
                .set("username", userName)
                .set("password", password);
            this.http.post(environment.login_api_url, null, { headers: headers })
                .subscribe(function (result) {
                sessionStorage.setItem("AUTH_TOKEN", result.token);
                var returnUrl = _this.activatedRoute.snapshot.queryParams["returnUrl"];
                console.log(returnUrl, _this.activatedRoute.snapshot.queryParams);
                if (!returnUrl) {
                    returnUrl = "/home";
                }
                console.log(returnUrl);
                _this.router.navigate([returnUrl]);
            }, function () {
                alert("Invalid credentials");
            });
            // if(userName === "admin" && password==="admin"){
            //   sessionStorage.setItem("AUTH_TOKEN",userName);
            //   //If we don't want observe we can use snapshot to read
            //   let returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];
            //   if(!returnUrl){
            //     returnUrl = "/home";
            //   }
            //   console.log(returnUrl);
            //   this.router.navigate([returnUrl]);
            // }
            // else{
            //   alert("invalid credentials");
            // }      
        }
        else {
            alert("Invalid Form");
        }
    };
    LoginComponent.prototype.change = function () {
        this.message = "<h2>This is changed message</h2>";
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
            HttpClient])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map
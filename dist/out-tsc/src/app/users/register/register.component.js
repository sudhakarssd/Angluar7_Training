import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNamesValidator } from '../../app-shared/ForbiddenNamesValidator';
import { CheckUniqueNameValidator } from 'src/app/app-shared/CheckUniqueNameValidator';
import { HttpClient } from '@angular/common/http';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http) {
        this.http = http;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerFormGroup = new FormGroup({
            userName: new FormControl("", [Validators.required,
                Validators.minLength(3),
                ForbiddenNamesValidator(["admin", "manager"])], [CheckUniqueNameValidator(this.http)]),
            passWord: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z]{4,}")]),
            email: new FormControl("", [Validators.required, Validators.email]),
            contactNo: new FormControl("")
        });
    };
    RegisterComponent.prototype.register = function () {
        if (this.registerFormGroup.valid) {
            alert("Valid Form");
        }
        else {
            alert("Form is invalid");
        }
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map
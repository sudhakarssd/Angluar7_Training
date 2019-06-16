import * as tslib_1 from "tslib";
import { NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';
export function ForbiddenNamesValidator(forbiddenNames) {
    return function (control) {
        var controlValue = control.value;
        var result = forbiddenNames.find(function (item) { return item === controlValue; });
        return result ? { forbidden: true } : null;
    };
}
var ForbiddenNamesValidatorDirective = /** @class */ (function () {
    function ForbiddenNamesValidatorDirective() {
    }
    ForbiddenNamesValidatorDirective_1 = ForbiddenNamesValidatorDirective;
    ForbiddenNamesValidatorDirective.prototype.validate = function (control) {
        // const controlValue = control.value;
        // const result = this.forbiddenNames.find(item=>item === controlValue);
        // return result ? {forbidden:true}:null;
        return ForbiddenNamesValidator(this.forbiddenNames)(control);
    };
    var ForbiddenNamesValidatorDirective_1;
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], ForbiddenNamesValidatorDirective.prototype, "forbiddenNames", void 0);
    ForbiddenNamesValidatorDirective = ForbiddenNamesValidatorDirective_1 = tslib_1.__decorate([
        Directive({
            selector: "[forbiddenNames]",
            providers: [{ provide: NG_VALIDATORS,
                    useExisting: ForbiddenNamesValidatorDirective_1, multi: true }]
        })
    ], ForbiddenNamesValidatorDirective);
    return ForbiddenNamesValidatorDirective;
}());
export { ForbiddenNamesValidatorDirective };
//# sourceMappingURL=ForbiddenNamesValidator.js.map
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
var DataBindingComponent = /** @class */ (function () {
    function DataBindingComponent() {
        this.user = { firstName: "Sudhakar", lastName: "Dasoju" };
        this.count = 10;
        this.message = "Ng Message";
    }
    DataBindingComponent.prototype.inc = function (evt) {
        this.count++;
        console.log(evt);
    };
    DataBindingComponent = tslib_1.__decorate([
        Component({
            selector: "data-binding",
            templateUrl: './data-binding.component.html',
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DataBindingComponent);
    return DataBindingComponent;
}());
export { DataBindingComponent };
//# sourceMappingURL=data-binding.component.js.map
import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Customer } from '../model/customer';
var EditComponent = /** @class */ (function () {
    function EditComponent() {
        this.saved = new EventEmitter();
        this.cancelled = new EventEmitter();
        //called only once
        console.log("[EditComponent constructor]");
    }
    EditComponent.prototype.ngOnInit = function () {
        //called only once
        console.log("[EditComponent ngOnInit]");
    };
    EditComponent.prototype.ngOnChanges = function (changes) {
        //called everytime there is a any change
        console.log("[EditComponent ngOnChanges]", changes);
        //Shallow copy
        //this.temp = this.customer;
        //deep copy -- new object is created
        //es6 spread operator 
        this.temp = tslib_1.__assign({}, this.customer);
    };
    EditComponent.prototype.ngOnDestroy = function () {
        console.log("[EditComponent ngOnDestroy]:");
    };
    EditComponent.prototype.save = function () {
        //Object.assign(this.customer, this.temp);
        this.saved.emit(this.temp);
    };
    EditComponent.prototype.cancel = function () {
        this.cancelled.emit("Edit Cancelled");
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Customer)
    ], EditComponent.prototype, "customer", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], EditComponent.prototype, "saved", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], EditComponent.prototype, "cancelled", void 0);
    EditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());
export { EditComponent };
//# sourceMappingURL=edit.component.js.map
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(activatedRoute, router, location) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (data) {
            _this.customerId = data.id;
        });
    };
    DetailsComponent.prototype.back = function () {
        //this.router.navigate(["/customers"]);
        this.location.back();
    };
    DetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router, Location])
    ], DetailsComponent);
    return DetailsComponent;
}());
export { DetailsComponent };
//# sourceMappingURL=details.component.js.map
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
var ChangeDetectionComponent = /** @class */ (function () {
    function ChangeDetectionComponent(detectorRef) {
        this.detectorRef = detectorRef;
        this.data = [{ id: 1, color: 'red' }, { id: 2, color: 'yellow' }, { id: 3, color: 'orange' }];
        this.colors = ['purple', 'blue', 'black'];
        this.detectorRef.detach();
    }
    ChangeDetectionComponent.prototype.ngAfterViewInit = function () {
        this.detectorRef.detach();
    };
    ChangeDetectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        interval()
            .pipe(take(10000))
            .subscribe(function (value) {
            _this.counter = value;
            if (_this.counter % 100 === 0) {
                _this.detectorRef.detectChanges();
            }
        });
    };
    ChangeDetectionComponent.prototype.change = function () {
        var index = Math.floor(Math.random() * Math.floor(3));
        //this.data[index].color= this.colors[Math.floor(Math.random() * Math.floor(3))];
        var color = this.colors[Math.floor(Math.random() * Math.floor(3))];
        this.data[index] = tslib_1.__assign({}, this.data[index], { color: color });
    };
    ChangeDetectionComponent = tslib_1.__decorate([
        Component({
            selector: 'app-change-detection',
            templateUrl: './change-detection.component.html',
            styleUrls: ['./change-detection.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], ChangeDetectionComponent);
    return ChangeDetectionComponent;
}());
export { ChangeDetectionComponent };
var SimpleComponent = /** @class */ (function () {
    function SimpleComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SimpleComponent.prototype, "simpleData", void 0);
    SimpleComponent = tslib_1.__decorate([
        Component({
            selector: "simple",
            template: "\n        <div [style.background-color]=\"simpleData.color\">\n        <p>Id:{{simpleData.id}}</p>\n        <p>Color:{{simpleData.color}}</p>\n        </div>\n      ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], SimpleComponent);
    return SimpleComponent;
}());
export { SimpleComponent };
//# sourceMappingURL=change-detection.component.js.map
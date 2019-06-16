import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer, HostListener, Input, HostBinding } from '@angular/core';
var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        //renderer.setElementStyle(this.elementRef.nativeElement,"background-color","yellow");
    }
    HighlightDirective.prototype.mouseenter = function () {
        this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", this.appHighlight);
        this.isHover = true;
    };
    HighlightDirective.prototype.mouseleave = function () {
        this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", "white");
        this.isHover = false;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], HighlightDirective.prototype, "appHighlight", void 0);
    tslib_1.__decorate([
        HostBinding("class.hover"),
        tslib_1.__metadata("design:type", Boolean)
    ], HighlightDirective.prototype, "isHover", void 0);
    tslib_1.__decorate([
        HostListener("mouseenter"),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "mouseenter", null);
    tslib_1.__decorate([
        HostListener("mouseleave"),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "mouseleave", null);
    HighlightDirective = tslib_1.__decorate([
        Directive({
            selector: '[appHighlight]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer])
    ], HighlightDirective);
    return HighlightDirective;
}());
export { HighlightDirective };
//# sourceMappingURL=highlight.directive.js.map
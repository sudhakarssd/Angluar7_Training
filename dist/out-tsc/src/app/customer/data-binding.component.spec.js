var _this = this;
import * as tslib_1 from "tslib";
import { TestBed } from '@angular/core/testing';
import { DataBindingComponent } from '../data-binding.component';
import { FormsModule } from '@angular/forms';
describe("DataBindingComponent", function () {
    beforeEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            TestBed.configureTestingModule({
                declarations: [DataBindingComponent],
                imports: [FormsModule],
                providers: []
            }).compileComponents();
            return [2 /*return*/];
        });
    }); });
    it("should create an instance", function () {
        var fixture = TestBed.createComponent(DataBindingComponent);
        var debugElement = fixture.debugElement;
        var instance = debugElement.componentInstance;
        expect(instance).toBeTruthy();
    });
    it("should increment an count by 1", function () {
        var fixture = TestBed.createComponent(DataBindingComponent);
        var debugElement = fixture.debugElement;
        var instance = debugElement.componentInstance;
        var count = instance.count;
        instance.inc({});
        expect(instance.count).toBe(count + 1);
    });
    it("should update user on the  html", function () {
        var fixture = TestBed.createComponent(DataBindingComponent);
        var debugElement = fixture.debugElement;
        var instance = debugElement.componentInstance;
        instance.user = { firstName: "Virat", lastName: "Kohli" };
        fixture.detectChanges();
        var text = debugElement.nativeElement.querySelector("div > div").textContent;
        expect(text).toContain("Virat Kohli");
    });
});
//# sourceMappingURL=data-binding.component.spec.js.map
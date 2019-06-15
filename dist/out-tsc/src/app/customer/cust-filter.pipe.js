import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var CustFilterPipe = /** @class */ (function () {
    function CustFilterPipe() {
    }
    CustFilterPipe.prototype.transform = function (input, searchKey) {
        if (!searchKey) {
            return input;
        }
        else {
            return input.filter(function (cust) { return cust.id.toString() === searchKey
                || cust.name.toLowerCase().includes(searchKey.toLowerCase())
                || cust.location.toLowerCase().includes(searchKey.toLowerCase()); });
        }
    };
    CustFilterPipe = tslib_1.__decorate([
        Pipe({
            name: 'custFilter'
        })
    ], CustFilterPipe);
    return CustFilterPipe;
}());
export { CustFilterPipe };
//# sourceMappingURL=cust-filter.pipe.js.map
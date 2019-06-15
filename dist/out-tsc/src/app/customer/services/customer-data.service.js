import * as tslib_1 from "tslib";
import { DataService } from './data-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
var CustomerDataService = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerDataService, _super);
    function CustomerDataService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    CustomerDataService.prototype.getCustomers = function () {
        this.url = environment.customer_api_url;
        return this.http.get(this.url);
    };
    CustomerDataService.prototype.saveCustomer = function (customer) {
        this.url = environment.customer_api_url;
        var headers = new HttpHeaders()
            .set("Content-Type", "application/json");
        return this.http.post(this.url, customer, { headers: headers, observe: 'response' });
    };
    CustomerDataService.prototype.updateCustomer = function (customer) {
        this.url = environment.customer_api_url;
        var headers = new HttpHeaders()
            .set("Content-Type", "application/json");
        return this.http.put(this.url, customer, { headers: headers, observe: 'response' });
    };
    CustomerDataService.prototype.deleteCustomer = function (customerId) {
        return this.http.delete(this.url + "/" + customerId);
    };
    CustomerDataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CustomerDataService);
    return CustomerDataService;
}(DataService));
export { CustomerDataService };
//# sourceMappingURL=customer-data.service.js.map
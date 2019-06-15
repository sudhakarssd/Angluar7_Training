import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Customer } from '../model/customer';
import { DataService } from '../services/data-service';
var ListComponent = /** @class */ (function () {
    function ListComponent(dataService) {
        //console.log(dataService.getCustomers());
        this.dataService = dataService;
        this.customer = new Customer();
        this.data = new Array();
        /*  this.data.push(new Customer(1,"Google","Mumbai"));
         this.data.push(new Customer(2,"Facebook","Banglore"));
         this.data.push(new Customer(3,"Apple","Mumbai"));
         this.data.push(new Customer(4,"Microsoft","Hyderabad"));
         this.data.push(new Customer(5,"Oracle","Mumbai")); */
    }
    //any api calls recommended to use ngOnit
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService
            .getCustomers()
            .subscribe(function (result) {
            _this.data = result;
            //console.log("data", this.data)
        });
    };
    ListComponent.prototype.save = function () {
        var _this = this;
        this.dataService
            .saveCustomer(this.customer)
            .subscribe(function () {
            _this.data.push(_this.customer);
            _this.customer = new Customer();
        }, function (resp) {
            console.log(resp);
        });
    };
    // delete(evt, index) {
    //   this.data.splice(index, 1);
    //   evt.preventDefault();
    // }
    ListComponent.prototype.delete = function (evt, index, cust) {
        var _this = this;
        this.dataService.deleteCustomer(cust.id)
            .subscribe(function () {
            _this.data.splice(index, 1);
        }, function () {
            alert("delete failed");
        });
        evt.preventDefault();
    };
    ListComponent.prototype.edit = function (evt, customer) {
        this.selectedCustomer = customer;
        evt.preventDefault();
    };
    ListComponent.prototype.editComplete = function (updatedCustomer) {
        Object.assign(this.selectedCustomer, updatedCustomer);
        this.selectedCustomer = null;
    };
    ListComponent.prototype.editCancelled = function (msg) {
        this.selectedCustomer = null;
        alert(msg);
    };
    ListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], ListComponent);
    return ListComponent;
}());
export { ListComponent };
//# sourceMappingURL=list.component.js.map
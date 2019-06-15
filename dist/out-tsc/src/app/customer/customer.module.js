import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { CustFilterPipe } from './cust-filter.pipe';
import { DataService } from './services/data-service';
import { CustomerDataService } from './services/customer-data.service';
import { HttpClientModule } from '@angular/common/http';
var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = tslib_1.__decorate([
        NgModule({
            declarations: [ListComponent, EditComponent, CustFilterPipe],
            //imports will always be modules
            imports: [
                CommonModule, FormsModule, HttpClientModule
            ],
            //Only components,pipes except module
            //To use component of one module to another module 
            exports: [ListComponent],
            providers: [{ provide: DataService, useClass: CustomerDataService }]
        })
    ], CustomerModule);
    return CustomerModule;
}());
export { CustomerModule };
//# sourceMappingURL=customer.module.js.map
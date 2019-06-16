import { TestBed } from '@angular/core/testing';
import { CustomerDataService } from './customer-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
fdescribe('CustomerDataService', function () {
    var httpMock;
    beforeEach(function () {
        return TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CustomerDataService]
        });
    });
    httpMock = TestBed.get(HttpTestingController);
    it('should be created', function () {
        var service = TestBed.get(CustomerDataService);
        expect(service).toBeTruthy();
    });
    it("get customers should return an array of customers", function () {
        var service = TestBed.get(CustomerDataService);
        service
            .getCustomers()
            .subscribe(function (result) {
            expect(result.length).toBe(3);
        });
        var request = httpMock.expectOne(environment.customer_api_url);
        request.flush([{}, {}, {}]);
    });
});
//# sourceMappingURL=customer-data.service.spec.js.map
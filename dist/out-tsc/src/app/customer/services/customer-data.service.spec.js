import { TestBed } from '@angular/core/testing';
import { CustomerDataService } from './customer-data.service';
describe('CustomerDataService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CustomerDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=customer-data.service.spec.js.map
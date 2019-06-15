import { TestBed } from '@angular/core/testing';
import { MockDataService } from './mock-data.service';
describe('MockDataService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(MockDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=mock-data.service.spec.js.map
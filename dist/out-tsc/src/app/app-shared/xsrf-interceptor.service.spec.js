import { TestBed } from '@angular/core/testing';
import { XsrfInterceptorService } from './xsrf-interceptor.service';
describe('XsrfInterceptorService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(XsrfInterceptorService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=xsrf-interceptor.service.spec.js.map
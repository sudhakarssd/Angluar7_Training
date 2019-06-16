import { TestBed } from '@angular/core/testing';

import { XsrfInterceptorService } from './xsrf-interceptor.service';

describe('XsrfInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XsrfInterceptorService = TestBed.get(XsrfInterceptorService);
    expect(service).toBeTruthy();
  });
});

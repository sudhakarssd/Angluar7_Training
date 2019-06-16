import { TestBed } from '@angular/core/testing';
import { CustomerDataService } from './customer-data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { environment } from 'src/environments/environment';


fdescribe('CustomerDataService', () => {

  let httpMock: HttpTestingController;

  beforeEach(() => 
  TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[CustomerDataService]
  }));

  httpMock = TestBed.get(HttpTestingController);

  it('should be created', () => {
    const service: CustomerDataService = TestBed.get(CustomerDataService);
    expect(service).toBeTruthy();
  });

  it("get customers should return an array of customers",()=> {
    const service:CustomerDataService = TestBed.get(CustomerDataService);
    service
    .getCustomers()
      .subscribe(result => {
        expect(result.length).toBe(3);
      })
    const request = httpMock.expectOne(environment.customer_api_url)
    request.flush([{},{},{}])
  });
});

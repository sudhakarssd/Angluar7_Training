import { DataService } from './data-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable()
export class CustomerDataService extends DataService {

  url:string;
  
  constructor(private http:HttpClient) { 
    
    super();
    
  }

  getCustomers():Observable<Array<Customer>>{
    this.url=environment.customer_api_url;    
    return this.http.get<Array<Customer>>(this.url);
  }

  saveCustomer(customer: Customer):Observable<any>{
    this.url=environment.customer_api_url;
    const headers = new HttpHeaders()
                            .set("Content-Type","application/json")
    return this.http.post(this.url, customer,{headers,observe:'response'});
  }
  updateCustomer(customer: Customer):Observable<any>{
    this.url=environment.customer_api_url;
    const headers = new HttpHeaders()
                            .set("Content-Type","application/json")
    return this.http.put(this.url, customer,{headers,observe:'response'});
  }

  deleteCustomer(customerId: number):Observable<any>{
    
    return this.http.delete(this.url+"/"+customerId );
  }

}

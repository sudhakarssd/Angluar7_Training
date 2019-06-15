import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

export abstract class DataService{
    abstract getCustomers():Observable<Array<Customer>>;
    abstract saveCustomer(customer:Customer):Observable<any>;
    abstract updateCustomer(customer:Customer):Observable<any>;
    abstract deleteCustomer(customerId:number):Observable<any>;
}
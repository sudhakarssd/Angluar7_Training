import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './model/customer';

@Pipe({
  name: 'custFilter'
})
export class CustFilterPipe implements PipeTransform {

  transform(input: Array<Customer>, searchKey?: any): Array<Customer> {
    if(!searchKey){
      return input;
    }
    else{
      return input.filter(cust =>cust.id.toString() === searchKey 
                                    || cust.name.toLowerCase().includes(searchKey.toLowerCase()) 
                                    || cust.location.toLowerCase().includes(searchKey.toLowerCase()));

    
    }
  }

}

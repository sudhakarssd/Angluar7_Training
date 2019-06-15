import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: Array<Customer>;
  customer = new Customer();
  selectedCustomer: Customer;
  searchKey: string;

  constructor(private dataService: DataService) {

    //console.log(dataService.getCustomers());

    this.data = new Array<Customer>();
    /*  this.data.push(new Customer(1,"Google","Mumbai"));
     this.data.push(new Customer(2,"Facebook","Banglore"));
     this.data.push(new Customer(3,"Apple","Mumbai"));
     this.data.push(new Customer(4,"Microsoft","Hyderabad"));
     this.data.push(new Customer(5,"Oracle","Mumbai")); */
  }

  //any api calls recommended to use ngOnit
  ngOnInit() {
    this.dataService
      .getCustomers()
      .subscribe(result =>{
        this.data=result;
        //console.log("data", this.data)
      });
      
      
  }

  save() {
    this.dataService
            .saveCustomer(this.customer)
            .subscribe(() => {
              this.data.push(this.customer);
              this.customer = new Customer();
            },(resp) =>{
              console.log(resp);
            });
   }
  // delete(evt, index) {
  //   this.data.splice(index, 1);
  //   evt.preventDefault();
  // }
  delete(evt, index,cust) {

    this.dataService.deleteCustomer(cust.id)
        .subscribe(() =>{
          this.data.splice(index, 1);
        },()=>{
          alert("delete failed");
        });
        
    evt.preventDefault();
  }

  edit(evt, customer) {
    this.selectedCustomer = customer;
    evt.preventDefault();
  }
  editComplete(updatedCustomer) {
    Object.assign(this.selectedCustomer, updatedCustomer);
    this.selectedCustomer = null;
  }
  editCancelled(msg) {
    this.selectedCustomer = null;
    alert(msg);
  }

}

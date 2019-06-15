import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy,EventEmitter,Output } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges, OnDestroy {

  @Input()  customer:Customer;
  temp: Customer;

  @Output() saved: EventEmitter<Customer> = new EventEmitter();
  @Output() cancelled:EventEmitter<string> = new EventEmitter();

  constructor() { 
    //called only once
    console.log("[EditComponent constructor]");
  }

  ngOnInit() {
    //called only once
    console.log("[EditComponent ngOnInit]");
  }  
  
  ngOnChanges(changes: SimpleChanges) {    
    //called everytime there is a any change
    console.log("[EditComponent ngOnChanges]",changes);
    //Shallow copy
    //this.temp = this.customer;

    //deep copy -- new object is created
    //es6 spread operator 
    this.temp={...this.customer};

  }
  ngOnDestroy(){
    console.log("[EditComponent ngOnDestroy]:")
  }
  save(){
    //Object.assign(this.customer, this.temp);
    this.saved.emit(this.temp);
  }
  cancel(){
    this.cancelled.emit("Edit Cancelled");
  }
}

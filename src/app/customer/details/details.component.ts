import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  customerId: number;


  constructor(private activatedRoute: ActivatedRoute, 
                      private router:Router, private location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.customerId=data.id;
    })
  }

  back(){ 
     //this.router.navigate(["/customers"]);
     this.location.back()
  }

}

import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

interface SimpleData{
  id: number;
  color:string;
}


@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.detectorRef.detach();
  }

  counter:number;
  data:SimpleData[] = [{id:1,color:'red'},{id:2,color:'yellow'},{id:3,color:'orange'}]
  colors:string[]=['purple','blue','black']
  constructor(private detectorRef:ChangeDetectorRef) {
    this.detectorRef.detach();
   }

  ngOnInit() {
    interval()
        .pipe(
          take(10000)
        )
        .subscribe(value => {
          this.counter = value;
          if(this.counter % 100 === 0){
            this.detectorRef.detectChanges();
          }
        })
  }
  change(){
    const index = Math.floor(Math.random() * Math.floor(3));        
    //this.data[index].color= this.colors[Math.floor(Math.random() * Math.floor(3))];

    const color = this.colors[Math.floor(Math.random() * Math.floor(3))];
    this.data[index] = {...this.data[index],color:color};
    
  }
}


@Component({
  selector:"simple",
  template:`
        <div [style.background-color]="simpleData.color">
        <p>Id:{{simpleData.id}}</p>
        <p>Color:{{simpleData.color}}</p>
        </div>
      `,
      changeDetection:ChangeDetectionStrategy.OnPush
})
export class SimpleComponent{
  @Input() simpleData: SimpleData;

 
}

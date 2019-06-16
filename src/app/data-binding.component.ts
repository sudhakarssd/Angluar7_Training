import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector:"data-binding",
    templateUrl:'./data-binding.component.html',    
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class DataBindingComponent{
    user:{firstName:string, lastName: string};
    count: number;
    message:string;
    constructor(){
        this.user = {firstName:"Sudhakar", lastName:"Dasoju"};
        this.count = 10;
        this.message="Ng Message";
    }

    inc(evt){
        this.count++;
        console.log(evt);
    }


}
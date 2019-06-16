import { TestBed } from '@angular/core/testing';
import { DataBindingComponent } from '../data-binding.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { count } from 'rxjs/operators';

describe("DataBindingComponent",()=>{

    beforeEach(async() =>{
        TestBed.configureTestingModule({
            declarations:[DataBindingComponent],
            imports:[FormsModule],
            providers:[]
        }).compileComponents();
    })
    it("should create an instance",()=>{
        const fixture = TestBed.createComponent(DataBindingComponent);
        const debugElement = fixture.debugElement;
        const instance = debugElement.componentInstance;
        expect(instance).toBeTruthy();
    })
    it("should increment an count by 1",()=>{
        const fixture = TestBed.createComponent(DataBindingComponent);
        const debugElement = fixture.debugElement;
        const instance: DataBindingComponent = debugElement.componentInstance;
        const count = instance.count;
        instance.inc({});
        expect(instance.count).toBe(count + 1);
    })

    it("should update user on the  html",()=>{
        const fixture = TestBed.createComponent(DataBindingComponent);
        const debugElement = fixture.debugElement;
        const instance: DataBindingComponent = debugElement.componentInstance;
        instance.user = {firstName:"Virat", lastName:"Kohli"}
        fixture.detectChanges();
        const text = debugElement.nativeElement.querySelector("div > div").textContent;
        expect(text).toContain("Virat Kohli");
    })
})
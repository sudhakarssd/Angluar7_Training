import { Component, OnInit } from '@angular/core';
import {interval, timer, Observable} from 'rxjs';
import {tap, take, share,filter,map, debounceTime} from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  searchFormControl: FormControl;
  searchResults: Array<string>;

  searchObserver: Observable<any>;

  constructor(private http: HttpClient) {
    //const numbers =  interval(1000);
    /* const numbers =  timer(5000,1000);
    const obs = numbers
     .pipe(
      take(10),
      tap(x=> console.log("tap: ",x)),      
      filter(x => x%2 ==0 ),
      map(x => x*x),
      share()
    )
    obs.subscribe(r => console.log("sub-1: ", r))
    obs.subscribe(r => console.log("sub-2: ", r)) */
   }

  ngOnInit() {
    this.searchFormControl = new FormControl("",[Validators.required,Validators.minLength(2)],[]);

    this.searchFormControl
                  .valueChanges
                  .pipe(
                    debounceTime(500),
                    filter(value => this.searchFormControl.valid)
                   )                   
                  .subscribe( value => {
                    const url = "https://en.wikipedia.org/w/api.php";
                    const urlParams 
                          = new HttpParams()
                            .set("action","opensearch")
                            .set("format","json")
                            .set("limit","20")
                            .set("origin","*")
                            .set("search", value);

                    /* this.http
                          .get(url,{params:urlParams})
                          .subscribe(result =>{
                            console.log(result)
                          }); */

                          
                          /* this.http
                          .get(url,{params:urlParams, observe:"body"})
                          .subscribe(result =>{
                            console.log(result)
                          }); */

                          //To get only second element of the array
                         /*  this.http
                          .get(url,{params:urlParams, observe:"body"})
                          .pipe(
                            map(result => result[1])
                          )
                          .subscribe(result =>{
                            this.searchResults = result;
                            console.log(result)
                          });
                          console.log(value)
                        }); */
                  
                        this.searchObserver = this.http
                        .get(url,{params:urlParams, observe:"body"})
                        .pipe(
                          map(result => result[1])
                        );
                        console.log(value)
                      });

  }

}

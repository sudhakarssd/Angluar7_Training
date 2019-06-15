import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { filter, map, debounceTime } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
var RxjsComponent = /** @class */ (function () {
    function RxjsComponent(http) {
        this.http = http;
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
    RxjsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchFormControl = new FormControl("", [Validators.required, Validators.minLength(2)], []);
        this.searchFormControl
            .valueChanges
            .pipe(debounceTime(500), filter(function (value) { return _this.searchFormControl.valid; }))
            .subscribe(function (value) {
            var url = "https://en.wikipedia.org/w/api.php";
            var urlParams = new HttpParams()
                .set("action", "opensearch")
                .set("format", "json")
                .set("limit", "20")
                .set("origin", "*")
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
            _this.searchObserver = _this.http
                .get(url, { params: urlParams, observe: "body" })
                .pipe(map(function (result) { return result[1]; }));
            console.log(value);
        });
    };
    RxjsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rxjs',
            templateUrl: './rxjs.component.html',
            styleUrls: ['./rxjs.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RxjsComponent);
    return RxjsComponent;
}());
export { RxjsComponent };
//# sourceMappingURL=rxjs.component.js.map
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import {observable, Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import { HttpClient, HttpParams } from '@angular/common/http';

export function CheckUniqueNameValidator(http:HttpClient):AsyncValidatorFn{

    return function(control:AbstractControl): Observable<ValidationErrors>|null{
        console.log("CheckUniqueNameValidator");
        const value = control.value;
        const url = "http://localhost:9000/checkName";
        const params = new HttpParams().set("name", value);
        return http
                 .get<{valid: boolean}>(url,{params: params})
                 .pipe(
                    map(result => result.valid ? null:{uniqueName:true} )                    
                 );
                 
                 
    }
}
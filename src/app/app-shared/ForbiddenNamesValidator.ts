import { ValidatorFn, AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

export function ForbiddenNamesValidator(forbiddenNames: string[]):ValidatorFn{

    return function(control: AbstractControl):ValidationErrors|null{
        const controlValue = control.value;

        const result = forbiddenNames.find(item=>item === controlValue);
        return result ? {forbidden:true}:null;
    }
}

@Directive({
    selector:"[forbiddenNames]",
    providers: [{provide: NG_VALIDATORS,
                useExisting:ForbiddenNamesValidatorDirective,multi:true}]
})
export class ForbiddenNamesValidatorDirective implements Validator{
    @Input() forbiddenNames: string[];
    validate(control: AbstractControl):ValidationErrors{
        // const controlValue = control.value;
        // const result = this.forbiddenNames.find(item=>item === controlValue);
        // return result ? {forbidden:true}:null;
        return ForbiddenNamesValidator(this.forbiddenNames)(control);        
    }
    // registerOnValidatorChange?(fn:()=> void):void{
    //     throw new Error("Method not implemented");
    // }
}
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function ForbiddenNamesValidator(forbiddenNames: string[]):ValidatorFn{

    return function(control: AbstractControl):ValidationErrors|null{
        const controlValue = control.value;

        const result = forbiddenNames.find(item=>item === controlValue);
        return result ? {forbidden:true}:null;
    }
}
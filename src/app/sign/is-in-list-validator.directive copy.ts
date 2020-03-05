import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[IsInListValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: IsInListValidatorDirective,
        multi: true
    }]
})


export class IsInListValidatorDirective implements Validator {
    @Input() IsInListValidator: string;
    @Input() IsInListCountryValidator: string;

    validate(control: AbstractControl): { [key: string]: any; } | null {
        console.log(this.IsInListCountryValidator)
        switch (name) {
            case 'country':
        }
        const input = control.value


        return null;
    }
}
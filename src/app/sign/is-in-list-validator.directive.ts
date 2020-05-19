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
    @Input() validateList: string
    @Input() IsInListCountryValidator: string;
    @Input() IsInListMonthValidator: string;
    @Input() IsInListDayValidator: string;
    @Input() IsInListYearValidator: string;

    validate(control: AbstractControl): { [key: string]: any; } | null {
        const input = control.value;
        let temp;
        let result;


        if (input) {
            switch (this.validateList) {
                case 'country':
                    temp = [...this.IsInListCountryValidator];
                    break;
                case 'year':
                    temp = [...this.IsInListYearValidator];
                    break;
                case 'month':
                    temp = [...this.IsInListMonthValidator];
                    break;
                case 'day':
                    temp = [...this.IsInListDayValidator];
                    break;
            }

            result = !!(temp.find((element: string) => (element + '').toLowerCase() === (input + '').toLowerCase()));
        }


        if (!result) {
            return { 'isInList': true };
        }
        return null;
    }
}
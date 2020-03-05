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
                    result = (temp.filter((arr: string) => arr.toLowerCase().indexOf(
                        input.toLowerCase()) !== -1)).length === 0 ? false : true;
                    break;
                case 'year':
                    temp = [...this.IsInListYearValidator];
                    result = (temp.filter((arr: string) => (arr + '').toLowerCase().indexOf(
                        (input + '').toLowerCase()) !== -1)).length === 0 ? false : true;
                    break;
                case 'month':
                    temp = [...this.IsInListMonthValidator];
                    result = (temp.filter((arr: string) => arr.toLowerCase().indexOf(
                        input.toLowerCase()) !== -1)).length === 0 ? false : true;
                    break;
                case 'day':
                    temp = [...this.IsInListDayValidator];
                    result = (temp.filter((arr: string) => (arr + '').toLowerCase().indexOf(
                        (input + '').toLowerCase()) !== -1)).length === 0 ? false : true;
                    break;

            }
        }


        if (!result) {
            return { 'isInList': true };
        }
        return null;
    }
}
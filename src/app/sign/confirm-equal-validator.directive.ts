import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appConfrimEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfrimEqualValidatorDirective,
        multi: true
    }]
})

export class ConfrimEqualValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any; } | null {
        const emailInput = control.get('emailInput');
        const confirmEmailInput = control.get('confirmEmailInput');
        const passwordInput = control.get('passwordInput');
        const confirmPasswordInput = control.get('confirmPasswordInput');

        if (emailInput && confirmEmailInput && emailInput.value !== confirmEmailInput.value) {
            return { 'EqualValidation': true };
        } else if (passwordInput && confirmPasswordInput && passwordInput.value !== confirmPasswordInput.value) {
            return { 'EqualValidation': true };
        }
        return null;
    }
}
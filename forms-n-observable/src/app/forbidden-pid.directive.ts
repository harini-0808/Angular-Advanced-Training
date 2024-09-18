import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
// custom validator for productId field in form-validation.component form
@Directive({
  selector: '[appForbiddenPid]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenPidDirective,
      multi: true,
    },
  ],
})
export class ForbiddenPidDirective implements Validator {

  constructor() { }
  @Input('appForbiddenPid') forbiddenPid = '';

  forbiddenPidValidator(input:string):ValidatorFn {
    return (control:AbstractControl):ValidationErrors|null => {
        return input.charAt(0) == 'p' ? null : {forbiddenPid:control.value}}
  }

  validate(control: AbstractControl): ValidationErrors | null {
  return this.forbiddenPid
  ? this.forbiddenPidValidator(this.forbiddenPid)(control)
  : null;

}
}

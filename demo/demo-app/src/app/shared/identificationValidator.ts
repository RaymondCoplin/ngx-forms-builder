import { ValidatorFn, AbstractControl } from '@angular/forms';

export const identificationValidator = (): ValidatorFn => {
  return (control: AbstractControl) => {
    if (control.value.length === 11) {
      return {
        identificationValidator: true
      };
    }
    return {
      identificationValidator: false
    };
  };
};

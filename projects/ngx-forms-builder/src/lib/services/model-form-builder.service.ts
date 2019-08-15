import 'reflect-metadata';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControlOptions } from '@angular/forms';

@Injectable()
export class ModelFormBuilder<T> {

  public build(target: T, options?: AbstractControlOptions | null): FormGroup {
    const fg = new FormGroup({}, options);

    for (const propertyKey of Object.keys(target)) {

      const decorators = Reflect.getMetadataKeys(target, propertyKey);
      if (decorators.indexOf('exclude') > 0) {
        continue;
      }

      fg.addControl(propertyKey, new FormControl(target[propertyKey]));
      const validators: ValidatorFn[] = [];

      decorators
        .filter(x => x !== 'design:type')
        .forEach((decorator) => {
          const validator = this.getValidatorByType(decorator, target, propertyKey);
          if (validator !== null) {
            validators.push(validator);
          }
        });

      fg.get(propertyKey).setValidators(validators);
    }

    return fg;
  }

  getValidatorByType(metadataKey: string, target: T, propertyKey: string | symbol): ValidatorFn {

    const validatorsType: ValidatorsType = {
      required: _ => Validators.required,
      email: _ => Validators.email,
      min: (min: number) => Validators.min(min),
      max: (max: number) => Validators.max(max),
      pattern: (pattern: string | RegExp) => Validators.pattern(pattern),
      customValidator: (custom: ValidatorFn) => custom
    };

    const metadataValue = Reflect.getMetadata(metadataKey, target, propertyKey);
    return validatorsType[metadataKey](metadataValue);
  }

}

interface ValidatorsType {
  [key: string]: ((...args: any) => ValidatorFn);
}

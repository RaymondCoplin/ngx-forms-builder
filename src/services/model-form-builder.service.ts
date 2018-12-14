import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import 'reflect-metadata';
import { Injectable } from '@angular/core';

@Injectable()
export class ModelFormBuilder<T> {

  public build(target: T): FormGroup {
    const fg = new FormGroup({});
    for (const propertyKey in target) {
      fg.addControl(propertyKey, new FormControl(target[propertyKey]));
      const validators: ValidatorFn[] = [];

      const decorators = Reflect.getMetadataKeys(target, propertyKey);
      decorators.forEach(decorator => {
        switch (decorator) {
          case 'required': {
            validators.push(Validators.required);
            break;
          }
          case 'email': {
            validators.push(Validators.email);
            break;
          }
          case 'min': {
            const min: number = Reflect.getMetadata(decorator, target, propertyKey);
            validators.push(Validators.min(min));
            break;
          }
          case 'max': {
            const max: number = Reflect.getMetadata(decorator, target, propertyKey);
            validators.push(Validators.max(max));
            break;
          }
          case 'pattern': {
            const pattern: string | RegExp = Reflect.getMetadata(decorator, target, propertyKey);
            validators.push(Validators.pattern(pattern));
            break;
          }
          case 'customValidator': {
            const customValidator: ValidatorFn = Reflect.getMetadata(decorator, target, propertyKey);
            validators.push(customValidator);
            break;
          }
        }
      });

      fg.get(propertyKey).setValidators(validators);
    }
    return fg;
  }

}
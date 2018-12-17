import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import 'reflect-metadata';
import { Injectable } from '@angular/core';

@Injectable()
export class ModelFormBuilder<T> {

  public build(target: T): FormGroup {
    const fg = new FormGroup({});
    for (const propertyKey in target) {

      const decorators = Reflect.getMetadataKeys(target, propertyKey);
      if (decorators.filter(x => x === 'exclude').length > 0) continue;
      
      fg.addControl(propertyKey, new FormControl(target[propertyKey]));
      const validators: ValidatorFn[] = [];

      for (const decorator of decorators) {

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

      }

      const control = fg.get(propertyKey);
      if(control) {
        control.setValidators(validators);
      }

    }
    return fg;
  }

}
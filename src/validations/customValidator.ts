import 'reflect-metadata';
import { ValidatorFn } from '@angular/forms';

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

export function CustomValidator(validator: ValidatorFn): PropertyDecorator {
  return function (target: Object, propertyKey: string) {
    Reflect.defineMetadata('customValidator', validator, target, propertyKey);
  }
}
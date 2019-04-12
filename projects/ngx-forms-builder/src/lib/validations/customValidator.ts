import 'reflect-metadata';
import { ValidatorFn } from '@angular/forms';

declare type PropertyDecorator = (target: object, propertyKey: string | symbol) => void;

export function CustomValidator(validator: ValidatorFn): PropertyDecorator {
  return (target: object, propertyKey: string) => {
    Reflect.defineMetadata('customValidator', validator, target, propertyKey);
  };
}

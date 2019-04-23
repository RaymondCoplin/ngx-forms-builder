import { Validations } from './validations.enum';
import { ValidatorFn } from '@angular/forms';

declare type PropertyDecorator = (target: object, propertyKey: string | symbol) => void;

export const createValidationDecorator = (validation: Validations) => {
  return (): PropertyDecorator => {
    return (target: object, propertyKey: string) => {
      Reflect.defineMetadata(String(validation), true, target, propertyKey);
    };
  };
};

export const createValidationDecoratorWithValue = <T>(validation: Validations) => {
  return (value?: T): PropertyDecorator => {
    return (target: object, propertyKey: string) => {
      Reflect.defineMetadata(String(validation), value, target, propertyKey);
    };
  };
};

export const Required = createValidationDecorator(Validations.REQUIRED);
export const Email = createValidationDecorator(Validations.EMAIL);
export const Exclude = createValidationDecorator(Validations.EXCLUDE);
export const Min = createValidationDecoratorWithValue<number>(Validations.MIN);
export const Max = createValidationDecoratorWithValue<number>(Validations.MAX);
export const Pattern = createValidationDecoratorWithValue<RegExp | string>(Validations.PATTERN);
export const CustomValidator = createValidationDecoratorWithValue<ValidatorFn>(Validations.CUSTOMVALIDATOR);
export const JP = createValidationDecoratorWithValue<RegExp | string>(Validations.PATTERN);

import 'reflect-metadata';

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

export function Required(): PropertyDecorator {
  return function (target: Object, propertyKey: string) {
    Reflect.defineMetadata('required', true, target, propertyKey);
  }
}
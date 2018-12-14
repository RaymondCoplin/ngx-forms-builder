import 'reflect-metadata';

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

export function Email(): PropertyDecorator {
  return function (target: Object, propertyKey: string) {
    Reflect.defineMetadata('email', true, target, propertyKey);
  }
}
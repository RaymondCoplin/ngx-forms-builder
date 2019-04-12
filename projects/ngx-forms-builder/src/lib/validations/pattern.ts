import 'reflect-metadata';

declare type PropertyDecorator = (target: object, propertyKey: string | symbol) => void;

export function Pattern (pattern: string | RegExp): PropertyDecorator {
  return function (target: object, propertyKey: string) {
    Reflect.defineMetadata('pattern', pattern, target, propertyKey);
  }
}
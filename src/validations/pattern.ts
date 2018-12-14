import 'reflect-metadata';

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

export function Pattern (pattern: string | RegExp): PropertyDecorator {
  return function (target: Object, propertyKey: string) {
    Reflect.defineMetadata('pattern', pattern, target, propertyKey);
  }
}
import 'reflect-metadata';

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

export function Max(value: number): PropertyDecorator {
  return function (target: Object, propertyKey: string) {
    Reflect.defineMetadata('max', value, target, propertyKey);
  }
}
import 'reflect-metadata';

declare type PropertyDecorator = (target: object, propertyKey: string | symbol) => void;

export function Min(value: number): PropertyDecorator {
  return function (target: object, propertyKey: string) {
    Reflect.defineMetadata('min', value, target, propertyKey);
  }
}
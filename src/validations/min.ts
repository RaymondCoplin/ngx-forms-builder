import 'reflect-metadata';

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

export function Min(value: number): PropertyDecorator {
  return function (target: Object, propertyKey: string) {
    Reflect.defineMetadata('min', value, target, propertyKey);
  }
}
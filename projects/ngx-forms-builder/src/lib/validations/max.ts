import 'reflect-metadata';

declare type PropertyDecorator = (target: object, propertyKey: string | symbol) => void;

export function Max(value: number): PropertyDecorator {
  return (target: object, propertyKey: string) => {
    Reflect.defineMetadata('max', value, target, propertyKey);
  };
}

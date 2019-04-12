import 'reflect-metadata';

declare type PropertyDecorator = (target: object, propertyKey: string | symbol) => void;

export function Email(): PropertyDecorator {
  return (target: object, propertyKey: string) => {
    Reflect.defineMetadata('email', true, target, propertyKey);
  };
}

import 'reflect-metadata';

declare type PropertyDecorator = (target: object, propertyKey: string | symbol) => void;

export function Required(): PropertyDecorator {
  return (target: object, propertyKey: string) => {
    Reflect.defineMetadata('required', true, target, propertyKey);
 };
}

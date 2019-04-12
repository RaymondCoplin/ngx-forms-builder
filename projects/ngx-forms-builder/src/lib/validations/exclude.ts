import 'reflect-metadata';

declare type PropertyDecorator = (target: object, propertyKey: string | symbol) => void;

export function Exclude(): PropertyDecorator {
  return (target: object, propertyKey: string | symbol) => {
    Reflect.defineMetadata('exclude', true, target, propertyKey);
  };
}

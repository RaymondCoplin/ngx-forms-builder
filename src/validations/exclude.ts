import 'reflect-metadata';

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

export function Exclude(): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    Reflect.defineMetadata('exclude', true, target, propertyKey);
  } 
}

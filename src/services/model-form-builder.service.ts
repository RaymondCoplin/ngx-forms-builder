import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import 'reflect-metadata';
import { Injectable } from '@angular/core';

@Injectable()
export class ModelFormBuilder<T> {

  public build(target: T): FormGroup {
    const fg = new FormGroup({});
    for (const propertyKey in target) {

      const decorators = Reflect.getMetadataKeys(target, propertyKey);
      if (decorators.indexOf('exclude') > 0) continue;
      
      fg.addControl(propertyKey, new FormControl(target[propertyKey]));
      const validators: ValidatorFn[] = [];

      decorators.map((decorator)=>{
        let validator = this.getValidatorByType(decorator, target, propertyKey);
        if(validator!== null) validators.push(validator);
      });

      fg.get(propertyKey).setValidators(validators);
    }
    return fg;
  }

   getValidatorByType(metadataKey: any, target: Object, propertyKey: string | symbol){
      let 
        validator : any,
        metadataValue: ValidatorFn,
        validatorsType : any = {
        'required': ()=> Validators.required,
        'email': ()=>  Validators.email,
        'min' : (min : number)=>Validators.min(min),
        'max' : (max : number)=> Validators.max(max),
        'pattern' : (pattern : string | RegExp)=> Validators.pattern(pattern),
        'customValidator' : (custom : ValidatorFn)=> custom,
       };
       
       metadataValue = Reflect.getMetadata(metadataKey, target, propertyKey);
       validator =  (metadataKey === 'design:type')? null : validatorsType[metadataKey](metadataValue);
       return validator;
   }

}


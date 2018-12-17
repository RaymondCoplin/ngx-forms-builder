import { identificationValidator } from './shared/identificationValidator';
import { Required, Email, Pattern, Min, Max, Exclude, CustomValidator } from '../../../../src/validations';

export class Person {

  @Required()
  firstName: string;

  @Required()
  lastName: string;

  @Email()
  @Required()
  email: string;

  @Pattern(/^[.,_A-zÀ-ú0-9]*((-|\s)*[.,_A-zÀ-ú0-9])*$/)
  address: string;

  @Min(1)
  @Max(100)
  age: number;

  @Exclude()
  secretPassword: string;

  @CustomValidator(identificationValidator)
  documentNumber: string;

  constructor(firstName: string, lastName: string, email: string, age: number, address: string, secretPassword: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    this.secretPassword = secretPassword;
  }

}

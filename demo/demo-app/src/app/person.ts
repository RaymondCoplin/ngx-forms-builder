import { identificationValidator } from './shared/identificationValidator';
import { Required, Email, Pattern, Min, Max, CustomValidator } from '../../../../src/validations';

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

  @Min(5)
  @Max(1000)
  apartmentNumber: number;

  @CustomValidator(identificationValidator)
  documentNumber: string;

  constructor(firstName: string, lastName: string, email: string, address: string, apartmentNumber: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.apartmentNumber = apartmentNumber;
  }

}

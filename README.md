Ngx-forms-builder
=========

A small library that adds validation with decorators and build angular forms.

## Installation

  `npm install ngx-forms-builder`

## Usage

    import { Required, Email, Pattern, Min, Max, CustomValidator } from 'ngx-forms-builder';

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

    /*-------------------------------------------------------------*/

    import { Component, OnInit } from '@angular/core';
    import { Person } from './person';
    import { FormGroup } from '@angular/forms';
    import { ModelFormBuilder } from 'ngx-forms-builder';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html'
    })
    export class AppComponent implements OnInit {

      formGroup: FormGroup;

      constructor(private fb: ModelFormBuilder<Person>) {}

      ngOnInit() {
        const model = new Person('Raymond', 'Coplin', 'raymondcoplin@gmail.com', 22, 'Calle Respaldo Costa Rica 8B', '');
        this.formGroup = this.fb.build(model);
      }

      log() {
        console.log(this.formGroup.value);
      }

    }


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
# NGX Forms Builder

[![devDependencies Status](https://david-dm.org/raymondcoplin/ngx-forms-builder/dev-status.svg)](https://david-dm.org/raymondcoplin/ngx-forms-builder?type=dev) [![npm](https://img.shields.io/badge/stackblitz-online-orange.svg)](https://stackblitz.com/edit/ngx-forms-builder-example)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[![NPM](https://nodei.co/npm/ngx-forms-builder.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/ngx-forms-builder)

[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/ngx-forms-builder.svg)](https://bundlephobia.com/result?p=ngx-forms-builder) [![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

A small library that adds validation with decorators and build angular forms 📝

## Demo

Try out our [demo on Stackblitz](https://ngx-forms-builder-example.stackblitz.io)!

## Install

  `npm install ngx-forms-builder --save`
  
## Setup

You'll need to add `NgxFormsBuilderModule` to your application module. So that, the builder service will be accessible in your application.

```typescript
@NgModule({
  declarations: [
    YourAppComponent
  ],
  imports: [
    NgxFormsBuilderModule.forRoot(),
    ...
  ],
  providers: [],
  bootstrap: [YourAppComponent]
})

export class YourAppComponent {}

```

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
    import { FormGroup } from '@angular/forms';
    import { ModelFormBuilder } from 'ngx-forms-builder';
    import { Person } from './person';
    import { MatSnackBar } from '@angular/material/snack-bar';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent implements OnInit {
      formGroup: FormGroup;

      constructor(private fb: ModelFormBuilder<Person>, private snackBar: MatSnackBar) { }

      ngOnInit() {
        const model = new Person('Raymond', 'Coplin', 'raymondcoplin@gmail.com', 23, 'Wall Street, New York', '');
        this.formGroup = this.fb.build(model);
      }

      onSubmit() {
        this.snackBar.open(`${this.formGroup.get('firstName').value} ${this.formGroup.get('lastName').value}`, 'Saved', {
          duration: 2000,
        });
      }
    }

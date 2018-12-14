Ngx-forms-builder
=========

A small library that adds validation with decorators and build angular forms.

## Installation

  `npm install ngx-forms-builder`

## Usage

    import { Required, Email, Pattern } from 'ngx-forms-builder';

    @Required()
    firstName: string;

    @Required()
    lastName: string;

    @Email()
    @Required()
    email: string;

    @Pattern(/^[.,_A-zÀ-ú0-9]*((-|\s)*[.,_A-zÀ-ú0-9])*$/)
    address: string;

    //-------------------------------------------------------------

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html'
    })
    export class AppComponent implements OnInit {

      fb: ModelFormBuilder<Person> = new ModelFormBuilder();
      formGroup: FormGroup;

      constructor() {}

      ngOnInit() {
        const model = new Person('Raymond', 'Coplin', 'raymondcoplin@gmail.com', 'Calle Respaldo Costa Rica 8B', 22);
        this.formGroup = this.fb.build(model);
      }

    }

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
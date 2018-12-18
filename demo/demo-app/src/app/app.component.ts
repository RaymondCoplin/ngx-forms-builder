import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { FormGroup } from '@angular/forms';
import { ModelFormBuilder } from '../../../../src';

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

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

  onReset() {
    this.formGroup.reset();
  }
}

import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MODULES = [
  MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule
];

@NgModule({
  imports: [ ...MODULES ],
  exports: [ ...MODULES ],
  declarations: [],
  providers: [],
})
export class MaterialModule { }

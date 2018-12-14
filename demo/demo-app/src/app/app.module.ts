import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFormsBuilderModule } from '../../../../src';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxFormsBuilderModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

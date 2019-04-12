import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModelFormBuilder } from './services/model-form-builder.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class NgxFormsBuilderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxFormsBuilderModule,
      providers: [ModelFormBuilder]
    };
  }
}

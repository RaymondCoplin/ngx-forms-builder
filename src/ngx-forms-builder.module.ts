
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ModelFormBuilder } from './services';

@NgModule()
export class NgxFormsBuilderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxFormsBuilderModule,      
      providers: [ ModelFormBuilder ]
    };
  }
}

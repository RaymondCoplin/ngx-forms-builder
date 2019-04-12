import { TestBed } from '@angular/core/testing';
import { ModelFormBuilder } from './model-form-builder.service';

describe('NgxFormsBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelFormBuilder<{}> = TestBed.get(ModelFormBuilder);
    expect(service).toBeTruthy();
  });
});

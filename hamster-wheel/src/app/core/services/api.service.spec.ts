import { async, TestBed } from '@angular/core/testing';
import { TestsModule } from '../../shared/modules/tests.module';
import { ApiService } from './api.service';
import { HttpErrorHandlerService } from './http-error-handler.service';

describe('ApiService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TestsModule
      ],
      providers: [
        HttpErrorHandlerService
      ]
    })
      .compileComponents();
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});

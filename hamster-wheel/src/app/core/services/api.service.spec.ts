import { async, TestBed } from '@angular/core/testing';
import { TestsModule } from 'src/app/shared/modules/tests.module';
import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TestsModule
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});

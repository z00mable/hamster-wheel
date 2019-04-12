import { TestBed } from '@angular/core/testing';
import { TestsModule } from '../../shared/modules/tests.module';
import { TransactionApiService } from './transaction-api.service';

describe('TransactionApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TestsModule,
    ],
    providers: [
      TransactionApiService
    ]
  }));

  it('should be created', () => {
    const service: TransactionApiService = TestBed.get(TransactionApiService);
    expect(service).toBeTruthy();
  });
});

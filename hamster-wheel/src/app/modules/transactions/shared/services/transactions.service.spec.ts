import { TestBed } from '@angular/core/testing';
import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TransactionsService
    ]
  }));

  it('should be created', () => {
    const service: TransactionsService = TestBed.get(TransactionsService);
    expect(service).toBeTruthy();
  });
});

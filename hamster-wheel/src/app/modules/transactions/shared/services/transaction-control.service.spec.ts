import { TestBed } from '@angular/core/testing';
import { TransactionControlService } from './transaction-control.service';

describe('TransactionControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TransactionControlService
    ]
  }));

  it('should be created', () => {
    const service: TransactionControlService = TestBed.get(TransactionControlService);
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { TransactionApiService } from '../../services/transaction-api.service';
import { TransactionsService } from '../../services/transactions.service';
import { HistoricTransactionsComponent } from './historic-transactions.component';

describe('HistoricTransactionsComponent', () => {
  let component: HistoricTransactionsComponent;
  let fixture: ComponentFixture<HistoricTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HistoricTransactionsComponent
      ],
      imports: [
        TableModule
      ],
      providers: [
        TransactionApiService,
        TransactionsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

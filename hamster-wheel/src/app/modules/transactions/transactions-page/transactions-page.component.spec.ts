import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestsModule } from '../../../shared/modules/tests.module';
import { HistoricTransactionsComponent } from '../shared/components/historic-transactions/historic-transactions.component';
import { TransactionFormControlComponent } from '../shared/components/transaction-form-control/transaction-form-control.component';
import { TransactionSubmissionFormComponent } from '../shared/components/transaction-submission-form/transaction-submission-form.component';
import { TransactionApiService } from '../shared/services/transaction-api.service';
import { TransactionControlService } from '../shared/services/transaction-control.service';
import { TransactionsService } from '../shared/services/transactions.service';
import { TransactionsPageComponent } from './transactions-page.component';

describe('TransactionsPageComponent', () => {
  let component: TransactionsPageComponent;
  let fixture: ComponentFixture<TransactionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionsPageComponent,
        TransactionSubmissionFormComponent,
        TransactionFormControlComponent,
        HistoricTransactionsComponent
      ],
      imports: [
        TestsModule
      ],
      providers: [
        TransactionsService,
        TransactionApiService,
        TransactionControlService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

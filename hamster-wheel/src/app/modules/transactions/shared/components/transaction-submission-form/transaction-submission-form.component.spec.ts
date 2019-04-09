import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestsModule } from '../../../../../shared/modules/tests.module';
import { TransactionApiService } from '../../services/transaction-api.service';
import { TransactionControlService } from '../../services/transaction-control.service';
import { TransactionsService } from '../../services/transactions.service';
import { TransactionFormControlComponent } from '../transaction-form-control/transaction-form-control.component';
import { TransactionSubmissionFormComponent } from './transaction-submission-form.component';

describe('TransactionSubmissionFormComponent', () => {
  let component: TransactionSubmissionFormComponent;
  let fixture: ComponentFixture<TransactionSubmissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionSubmissionFormComponent,
        TransactionFormControlComponent
      ],
      imports: [
        TestsModule
      ],
      providers: [
        TransactionControlService,
        TransactionApiService,
        TransactionsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

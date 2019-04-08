import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
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
        ReactiveFormsModule
      ],
      providers: [
        TransactionControlService,
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

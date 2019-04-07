import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSubmissionFormComponent } from './transaction-submission-form.component';

describe('TransactionSubmissionFormComponent', () => {
  let component: TransactionSubmissionFormComponent;
  let fixture: ComponentFixture<TransactionSubmissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionSubmissionFormComponent ]
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

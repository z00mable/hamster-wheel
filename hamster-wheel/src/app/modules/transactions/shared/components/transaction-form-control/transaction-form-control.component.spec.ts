import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFormControlComponent } from './transaction-form-control.component';

describe('TransactionFormControlComponent', () => {
  let component: TransactionFormControlComponent;
  let fixture: ComponentFixture<TransactionFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

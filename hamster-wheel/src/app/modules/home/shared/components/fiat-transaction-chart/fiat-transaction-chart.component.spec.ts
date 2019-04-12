import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionApiService } from 'src/app/core/services/transaction-api.service';
import { TestsModule } from '../../../../../shared/modules/tests.module';
import { FiatTransactionChartComponent } from './fiat-transaction-chart.component';

describe('FiatTransactionChartComponent', () => {
  let component: FiatTransactionChartComponent;
  let fixture: ComponentFixture<FiatTransactionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FiatTransactionChartComponent
      ],
      imports: [
        TestsModule,
      ],
      providers: [
        TransactionApiService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiatTransactionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

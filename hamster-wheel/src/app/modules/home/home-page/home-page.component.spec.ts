import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionApiService } from 'src/app/core/services/transaction-api.service';
import { TestsModule } from 'src/app/shared/modules/tests.module';
import { FiatTransactionChartComponent } from '../shared/components/fiat-transaction-chart/fiat-transaction-chart.component';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        FiatTransactionChartComponent,
      ],
      imports: [
        TestsModule
      ],
      providers: [
        TransactionApiService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

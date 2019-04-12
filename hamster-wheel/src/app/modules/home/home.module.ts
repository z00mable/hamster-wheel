import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionApiService } from 'src/app/core/services/transaction-api.service';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { FiatTransactionChartComponent } from './shared/components/fiat-transaction-chart/fiat-transaction-chart.component';

@NgModule({
  declarations: [
    HomePageComponent,
    FiatTransactionChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HomeRoutingModule
  ],
  providers: [
    TransactionApiService
  ]
})

export class HomeModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HistoricTransactionsComponent } from './shared/components/historic-transactions/historic-transactions.component';
import { TransactionFormControlComponent } from './shared/components/transaction-form-control/transaction-form-control.component';
import { TransactionSubmissionFormComponent } from './shared/components/transaction-submission-form/transaction-submission-form.component';
import { TransactionControlService } from './shared/services/transaction-control.service';
import { TransactionsService } from './shared/services/transactions.service';
import { TransactionsPageComponent } from './transactions-page/transactions-page.component';
import { TransactionsRoutingModule } from './transactions-routing.module';

@NgModule({
  declarations: [
    TransactionsPageComponent,
    TransactionSubmissionFormComponent,
    TransactionFormControlComponent,
    HistoricTransactionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TransactionsRoutingModule
  ],
  providers: [
    TransactionsService,
    TransactionControlService
  ]
})
export class TransactionsModule { }

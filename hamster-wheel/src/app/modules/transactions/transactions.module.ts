import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransactionFormControlComponent } from './shared/components/transaction-form-control/transaction-form-control.component';
import { TransactionSubmissionFormComponent } from './shared/components/transaction-submission-form/transaction-submission-form.component';
import { TransactionsPageComponent } from './transactions-page/transactions-page.component';
import { TransactionsRoutingModule } from './transactions-routing.module';

@NgModule({
  declarations: [
    TransactionsPageComponent,
    TransactionSubmissionFormComponent,
    TransactionFormControlComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from '../../../../../shared/components/base-component/base.component';
import { TransactionFormBase } from '../../models/transaction-form-base.model';
import { TransactionApiService } from '../../services/transaction-api.service';
import { TransactionControlService } from '../../services/transaction-control.service';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transaction-submission-form',
  templateUrl: './transaction-submission-form.component.html',
  styleUrls: ['./transaction-submission-form.component.css'],
  providers: [TransactionControlService]
})
export class TransactionSubmissionFormComponent extends BaseComponent implements OnInit {

  transactions: TransactionFormBase<any>[] = [];
  form: FormGroup;

  constructor(
    private transactionsService: TransactionsService,
    private transactionApiService: TransactionApiService,
    private transactionControlService: TransactionControlService
  ) {
    super();
    this.transactions = this.transactionsService.getTransactions();
  }

  ngOnInit() {
    this.form = this.transactionControlService.toFormGroup(this.transactions);
  }

  addTransaction() {
    this.transactionApiService.enrichAndSaveLocalTransaction(this.form.value).subscribe(
      result => {
        this.transactionApiService.addTransaction(result);
      }
    );
  }
}

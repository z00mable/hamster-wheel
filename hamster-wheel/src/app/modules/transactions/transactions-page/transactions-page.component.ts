import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base-component/base.component';
import { TransactionModel } from 'src/app/shared/models/transaction.model';
import { TransactionControlService } from '../shared/services/transaction-control.service';
import { TransactionsService } from '../shared/services/transactions.service';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.css'],
  providers: [TransactionsService, TransactionControlService]
})
export class TransactionsPageComponent extends BaseComponent implements OnInit {

  transactionRows: TransactionModel[] = [];
  transactionColumns: any;
  transactions: any[];

  constructor(
    private transactionsService: TransactionsService,
    private transactionControlService: TransactionControlService
  ) {
    super();
    this.transactions = this.transactionsService.getTransactions();
    this.transactionColumns = this.transactionsService.getTransactionColumns();

    this.transactionControlService.transactionToAdd$.subscribe(
      transaction => {
        this.transactionRows.push(transaction);
      }
    );
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base-component/base.component';
import { TransactionModel } from '../../../../../shared/models/transaction.model';
import { TransactionControlService } from '../../services/transaction-control.service';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-historic-transactions',
  templateUrl: './historic-transactions.component.html',
  styleUrls: ['./historic-transactions.component.css']
})
export class HistoricTransactionsComponent extends BaseComponent implements OnInit {

  rows: TransactionModel[] = [];
  columns: any;

  constructor(
    private transactionsService: TransactionsService,
    private transactionControlService: TransactionControlService
  ) {
    super();
    this.columns = this.transactionsService.getTransactionColumns();
  }

  ngOnInit() {
    this.transactionControlService.transactionToAdd$.subscribe(
      transaction => {
        console.log(this.rows);
        this.rows.push(transaction);
      }
    );
  }
}

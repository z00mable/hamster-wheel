import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base-component/base.component';
import { TransactionModel } from '../../../../../shared/models/transaction.model';
import { TransactionApiService } from '../../services/transaction-api.service';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-historic-transactions',
  templateUrl: './historic-transactions.component.html',
  styleUrls: ['./historic-transactions.component.css']
})
export class HistoricTransactionsComponent extends BaseComponent implements OnInit {

  rows: TransactionModel[] = [];
  columns: any;
  totalInSellingCurrency: number;
  totalInUsd: number;

  constructor(
    private transactionsService: TransactionsService,
    private transactionApiService: TransactionApiService
  ) {
    super();
    this.columns = this.transactionsService.getTransactionColumns();
    this.totalInSellingCurrency = 0;
    this.totalInUsd = 0;
  }

  ngOnInit() {
    this.transactionApiService.getAllTransactions().subscribe(
      result => {
        this.rows = result;
        this.totalInSellingCurrency = result.map((item) => item.sellAmount).reduce((sum, current) => sum + current);
        this.totalInUsd = result.map((item) => item.sellAmountInUsd).reduce((sum, current) => sum + current);
      }
    );

    this.transactionApiService.transactionLocalAdd$.subscribe(
      transaction => {
        this.rows.push(transaction);
        this.totalInSellingCurrency += transaction.sellAmount;
        this.totalInUsd += transaction.sellAmountInUsd;
      }
    );
  }
}

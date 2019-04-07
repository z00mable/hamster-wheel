import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base-component/base.component';
import { TransactionModel } from 'src/app/shared/models/transaction.model';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.css']
})
export class TransactionsPageComponent extends BaseComponent implements OnInit {

  transactionForm = this.fb.group({
    exchange: [''],
    date: [''],
    amountOut: [''],
    used: [''],
    amountIn: [''],
    got: [''],
  });

  columns = [
    { field: 'exchange', header: 'Exchange' },
    { field: 'date', header: 'Date' },
    { field: 'amountOut', header: 'Amount Out' },
    { field: 'used', header: 'Used' },
    { field: 'amountIn', header: 'Amount In' },
    { field: 'got', header: 'Got' }
  ];

  transactionRows: TransactionModel[] = [];

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
  }

  addTransaction(transaction: TransactionModel, isValid: boolean): void {
    this.transactionRows.push(transaction);
  }
}

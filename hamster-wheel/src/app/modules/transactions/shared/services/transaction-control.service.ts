import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { TransactionModel } from '../../../../shared/models/transaction.model';
import { TransactionFormBase } from '../models/transaction-form-base.model';

@Injectable()
export class TransactionControlService {
  constructor() { }

  private transactionAddSource = new Subject<TransactionModel>();
  public transactionToAdd$ = this.transactionAddSource.asObservable();

  addTransaction(transaction: TransactionModel) {
    this.transactionAddSource.next(transaction);
  }

  toFormGroup(transactions: TransactionFormBase<any>[]) {
    const group: any = {};

    transactions.forEach(transaction => {
      group[transaction.key] = transaction.required ? new FormControl(transaction.value || '', Validators.required)
        : new FormControl(transaction.value || '');
    });

    return new FormGroup(group);
  }
}

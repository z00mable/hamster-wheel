import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionFormBase } from '../models/transaction-form-base.model';

@Injectable()
export class TransactionControlService {

  constructor() { }

  toFormGroup(transactions: TransactionFormBase<any>[]) {
    const group: any = {};

    transactions.forEach(transaction => {
      group[transaction.key] = transaction.required ? new FormControl(transaction.value || '', Validators.required)
        : new FormControl(transaction.value || '');
    });

    return new FormGroup(group);
  }
}

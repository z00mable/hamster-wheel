import { Injectable } from '@angular/core';
import { TransactionFormBase } from '../models/transaction-form-base.model';
import { TransactionFormDropdown } from '../models/transaction-form-dropdown.model';
import { TransactionFormTextbox } from '../models/transaction-form-textbox.model';

@Injectable()
export class TransactionsService {

  public getTransactions() {

    const transactions: TransactionFormBase<any>[] = [

      new TransactionFormTextbox({
        key: 'exchange',
        label: 'Exchange',
        type: 'string',
        pipe: 'string',
        value: 'Coinbase',
        required: true,
        order: 1
      }),

      new TransactionFormTextbox({
        key: 'date',
        label: 'Date',
        type: 'date',
        pipe: 'date',
        value: new Date().toJSON().slice(0, 10),
        required: true,
        order: 2
      }),

      new TransactionFormTextbox({
        key: 'buyCurrency',
        label: 'Buy Currency',
        type: 'string',
        pipe: 'string',
        value: 'ETH',
        order: 3
      }),

      new TransactionFormTextbox({
        key: 'buyAmount',
        label: 'Buy Amount',
        type: 'number',
        pipe: 'number4',
        required: true,
        order: 4
      }),

      new TransactionFormTextbox({
        key: 'sellCurrency',
        label: 'Sell Currency',
        type: 'string',
        pipe: 'string',
        value: 'EUR',
        order: 5
      }),

      new TransactionFormTextbox({
        key: 'sellAmount',
        label: 'Sell Amount',
        type: 'number',
        pipe: 'currencyEur',
        required: true,
        order: 6
      })
    ];

    return transactions.sort((a, b) => a.order - b.order);
  }

  getTransactionColumns() {
    const columns = this.getTransactions().map(x => {
      return { field: x.key, header: x.label, pipe: x.pipe };
    });

    columns.push({ field: 'exchangeRate', header: 'Exchange Rate', pipe: 'number' });
    columns.push({ field: 'historicExchangeRate', header: 'Historic Exchange Rate (USD)', pipe: 'currencyDollar4' });
    columns.push({ field: 'sellAmountInUsd', header: 'Sell Amount In USD', pipe: 'currencyDollar' });
    columns.push({ field: 'exchangeRateInUsd', header: 'Exchange Rate In USD', pipe: 'currencyDollar' });
    return columns;
  }
}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { TransactionApiService } from 'src/app/core/services/transaction-api.service';
import { BaseComponent } from 'src/app/shared/components/base-component/base.component';
import { TransactionModel } from 'src/app/shared/models/transaction.model';

@Component({
  selector: 'app-fiat-transaction-chart',
  templateUrl: './fiat-transaction-chart.component.html',
  styleUrls: ['./fiat-transaction-chart.component.css']
})
export class FiatTransactionChartComponent extends BaseComponent implements OnInit, OnChanges {

  @Input() selectedCurrency: string;

  transactions: TransactionModel[];
  data: any;

  constructor(private transactionApiService: TransactionApiService) {
    super();
  }

  ngOnInit() {
    this.transactionApiService.getAllTransactions().pipe
      (takeUntil(this.ngUnsubscribe))
      .subscribe(
        result => {
          this.transactions = result;
          this.buildData();
        }
      );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.transactions) { return; }
    if (changes.selectedCurrency) {
      this.buildData();
    }
  }

  buildData() {
    if (this.selectedCurrency === 'USD') {
      this.buildChartData(this.buildDataUsd());
    } else {
      this.buildChartData(this.buildDataEur());
    }
  }

  buildDataEur() {
    return this.transactions.reduce((prev, cur) => {
      if (!prev[cur.buyCurrency]) {
        prev[cur.buyCurrency] = cur.sellAmount;
      } else {
        prev[cur.buyCurrency] = +prev[cur.buyCurrency] + cur.sellAmount;
      }
      return prev;
    }, {});
  }

  buildDataUsd() {
    return this.transactions.reduce((prev, cur) => {
      if (!prev[cur.buyCurrency]) {
        prev[cur.buyCurrency] = cur.sellAmountInUsd;
      } else {
        prev[cur.buyCurrency] = +prev[cur.buyCurrency] + cur.sellAmountInUsd;
      }
      return prev;
    }, {});
  }

  buildChartData(processedData: any) {
    this.data = {
      labels: Object.keys(processedData),
      datasets: [
        {
          data: Object.values(processedData),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }
}

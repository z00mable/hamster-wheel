import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TransactionFormBase } from '../../models/transaction-form-base.model';
import { TransactionControlService } from '../../services/transaction-control.service';
import { TransactionModel } from 'src/app/shared/models/transaction.model';
import { BaseComponent } from 'src/app/shared/components/base-component/base.component';

@Component({
  selector: 'app-transaction-submission-form',
  templateUrl: './transaction-submission-form.component.html',
  styleUrls: ['./transaction-submission-form.component.css'],
  providers: [TransactionControlService]
})
export class TransactionSubmissionFormComponent extends BaseComponent implements OnInit {

  @Input() transactions: TransactionFormBase<any>[] = [];
  form: FormGroup;
  payLoad: TransactionModel;

  constructor(private transactionControlService: TransactionControlService) {
    super();
  }

  ngOnInit() {
    this.form = this.transactionControlService.toFormGroup(this.transactions);
  }

  addTransaction() {
    this.payLoad = this.form.value;
    this.transactionControlService.addTransaction(this.form.value);
  }
}

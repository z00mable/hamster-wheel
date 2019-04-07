import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TransactionFormBase } from '../../models/transaction-form-base.model';

@Component({
  selector: 'app-transaction-form-control',
  templateUrl: './transaction-form-control.component.html',
  styleUrls: ['./transaction-form-control.component.css']
})
export class TransactionFormControlComponent  {

  @Input() transaction: TransactionFormBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.transaction.key].valid; }
}

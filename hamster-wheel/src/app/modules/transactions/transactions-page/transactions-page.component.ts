import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base-component/base.component';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.css']
})
export class TransactionsPageComponent extends BaseComponent implements OnInit {

  transactions: any[];

  constructor() {
    super();
  }

  ngOnInit() {
  }
}

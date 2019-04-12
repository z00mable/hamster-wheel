import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  currencies: SelectItem[];
  selectedCurrency: string;

  constructor() {
    this.currencies = [];
    this.currencies.push({ title: 'USD', value: 'USD', icon: 'fas fa-dollar-sign' });
    this.currencies.push({ title: 'EUR', value: 'EUR', icon: 'fas fa-euro-sign' });
    this.selectedCurrency = this.currencies[0].value;
  }

  ngOnInit() {
  }

}

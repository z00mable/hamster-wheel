import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { BaseComponent } from '../../../shared/components/base-component/base.component';
import { ExchangeRateModel } from '../../../shared/models/exchange-rate.model';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent extends BaseComponent implements OnInit {

  exchangeRates: ExchangeRateModel;

  constructor(
    private api: ApiService
  ) {
    super();
  }

  ngOnInit() {
  }

  public getLatestExchangeRates() {
    this.api.getRemoteExchangeRates().pipe
      (takeUntil(this.ngUnsubscribe))
      .subscribe(result => {
        this.exchangeRates = result.body;
        console.log(result);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseClass } from 'src/app/shared/components/base-class/base.class';
import { ExchangeRateModel } from 'src/app/shared/models/exchange-rate.model';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent extends BaseClass implements OnInit {

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

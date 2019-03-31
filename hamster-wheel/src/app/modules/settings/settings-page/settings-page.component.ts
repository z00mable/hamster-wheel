import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseClass } from 'src/app/core/base-class/base.class';
import { ApiService } from 'src/app/core/services/api.service';
import { LoggerService } from 'src/app/core/services/logger.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent extends BaseClass implements OnInit {

  exchangeRates: any;

  constructor(
    private logger: LoggerService,
    private api: ApiService
  ) {
    super();
  }

  ngOnInit() {
  }

  getLatestExchangeRates() {
    this.api.getExchangeRates().pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(result => {
        this.exchangeRates = result.body;
        console.log(result);
      });
  }
}

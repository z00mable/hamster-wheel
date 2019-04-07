import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  routes: {
    home: 'home',
    transactions: 'transactions',
    user: 'user',
    settings: 'settings'
  },
  exchangeRateApi: 'https://api.exchangeratesapi.io',
  localJsonServerUrl: 'http://localhost:3000'
};

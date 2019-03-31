import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  routes: {
    home: 'home',
    user: 'user',
    settings: 'settings'
  },
  sentryDSN: 'https://38434a1b115f41d3a31e356cdc496c06@sentry.io/1315526'
};

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConfig } from './configs/app.config';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: AppConfig.routes.home, loadChildren: './modules/home/home.module#HomeModule' },
  { path: AppConfig.routes.transactions, loadChildren: './modules/transactions/transactions.module#TransactionsModule' },
  { path: AppConfig.routes.user, loadChildren: './modules/user/user.module#UserModule' },
  { path: AppConfig.routes.settings, loadChildren: './modules/settings/settings.module#SettingsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

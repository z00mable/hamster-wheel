import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig } from '../../configs/app.config';
import { ExchangeRateModel } from '../../shared/models/exchange-rate.model';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('ApiService');
  }

  public getRemoteExchangeRates(): Observable<HttpResponse<ExchangeRateModel>> {
    return this.http.get<HttpResponse<ExchangeRateModel>>(AppConfig.exchangeRateApi + '/latest')
      .pipe(
        catchError(this.handleError('getRemoteExchangeRates', null))
      );
  }

  public getHistoricEurRate(date: Date): Observable<any> {
    return this.http.get<any>(AppConfig.exchangeRateApi + '/' + date)
      .pipe(
        catchError(this.handleError('getHistoricEurRate', null))
      );
  }

  public addLocalExchangeRates(exchageRates: ExchangeRateModel): Observable<ExchangeRateModel> {
    return this.http.post<ExchangeRateModel>(AppConfig.localUrl + '/exchange-rate', exchageRates, {
      headers: new HttpHeaders().set('Accept', 'application/json')
    })
      .pipe(
        catchError(this.handleError('addLocalExchangeRates', exchageRates))
      );
  }

  public updateLocalExchangeRates(exchageRates: ExchangeRateModel): Observable<ExchangeRateModel> {
    return this.http.put<ExchangeRateModel>(AppConfig.localUrl + '/exchange-rate', exchageRates, {
      headers: new HttpHeaders().set('Accept', 'application/json')
    })
      .pipe(
        catchError(this.handleError('updateLocalExchangeRates', exchageRates))
      );
  }
}

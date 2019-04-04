import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig } from '../../configs/app.config';
import { ExchangeRateModel } from '../../shared/models/exchange-rate.model';
import { HttpErrorHandlerService, HandleError } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.handleError = httpErrorHandler.createHandleError('ApiService');
  }

  httpOptions: any;

  public getRemoteExchangeRates(): Observable<HttpResponse<ExchangeRateModel>> {
    return this.http.get<HttpResponse<ExchangeRateModel>>(AppConfig.exchangeRateApi + '/latest');
  }

  public addLocalExchangeRates(exchageRates: ExchangeRateModel) {
    return this.http.post<ExchangeRateModel>(AppConfig.localUrl + '/exchange-rate', exchageRates, this.httpOptions)
      .pipe(
        catchError(this.handleError('addLocalExchangeRates', exchageRates))
      );
  }

  public updateLocalExchangeRates(exchageRates: ExchangeRateModel) {
    return this.http.put<ExchangeRateModel>(AppConfig.localUrl + '/exchange-rate', exchageRates, this.httpOptions)
      .pipe(
        catchError(this.handleError('updateLocalExchangeRates', exchageRates))
      );
  }
}
